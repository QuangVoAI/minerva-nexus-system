param([string]$Base='http://127.0.0.1:8081/api')
$ErrorActionPreference='Stop'
$run=[guid]::NewGuid().ToString('N').Substring(0,8)
$hub="DEMO-$run"
function Call-M2($method,$path,$body,$actor='DISPATCHER_WEB') {
    $argsMap=@{Method=$method;Uri="$Base$path";Headers=@{'X-Hub-Id'=$hub;'X-Actor-Id'=$actor}}
    if($null -ne $body){
        $argsMap.ContentType='application/json; charset=utf-8'
        $argsMap.Body=[Text.Encoding]::UTF8.GetBytes(($body|ConvertTo-Json -Depth 5))
    }
    Invoke-RestMethod @argsMap
}
$now=[DateTime]::UtcNow
$d1=Call-M2 POST '/drivers' @{name='Demo A';area='Q7';capacity=15;active=$true;services=@('EXPRESS')}
$d2=Call-M2 POST '/drivers' @{name='Demo B';area='Q7';capacity=15;active=$true;services=@('EXPRESS')}
$s=Call-M2 POST '/shifts' @{name="Ca $run";area='Q7';start=$now.ToString('o');end=$now.AddHours(4).ToString('o')}
Call-M2 POST "/shifts/$($s.id)/attendance" @{driverId=$d1.id;present=$true}
Call-M2 POST "/shifts/$($s.id)/attendance" @{driverId=$d2.id;present=$false}
$o=Call-M2 POST '/orders' @{trackingCode="M2-$run";orderCode="M2-$run";areaId='Q7';hubId=$hub;serviceLevel='EXPRESS';slaDeadline=$now.AddMinutes(50).ToString('o')}
Call-M2 PATCH "/orders/$($o.id)/status?target=READY_TO_DISPATCH" $null | Out-Null
Call-M2 PUT "/orders/$($o.id)/shift" @{shiftId=$s.id}
$batch=Call-M2 POST '/dispatch/proposals' @{shiftId=$s.id}
if($batch[0].proposal.suggested -ne $d1.id){throw 'Attendance filtering failed'}
$p=$batch[0].proposal
$suggestions=Call-M2 GET '/dispatch/suggestions' $null
if ($suggestions[0].assignmentId -ne $p.id){throw 'M3 suggestions contract failed'}
Call-M2 POST '/dispatch/approve' @{assignmentId=$p.id} | Out-Null
Call-M2 POST "/me/orders/$($o.id)/reject" @{reason='Su co xe'} $d1.id
$check=Call-M2 GET '/dispatch/board' $null
if($check.orders.($o.id).status -ne 'READY_TO_DISPATCH'){throw 'Rejected order not requeued'}
Call-M2 POST "/shifts/$($s.id)/attendance" @{driverId=$d2.id;present=$true}
$batch=Call-M2 POST '/dispatch/proposals' @{shiftId=$s.id}
Call-M2 POST '/dispatch/approve' @{assignmentId=$batch[0].proposal.id;driverId=$d2.id;reason='Tai xe thay the'} | Out-Null
Call-M2 POST "/me/orders/$($o.id)/accept" @{} $d2.id
$check=Call-M2 GET '/dispatch/board' $null
$live=$check.orders.($o.id)
if($live.status -ne 'DRIVER_ACCEPTED' -or $live.driverId -ne $d2.id){throw 'Reassignment failed'}
[pscustomobject]@{Hub=$hub;Order=$o.trackingCode;Score=$p.score.total;Original=$d1.name;Final=$d2.name;State=$live.status;Audit=@($check.events|Where-Object entity -eq $o.id).Count}
