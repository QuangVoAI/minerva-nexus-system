import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  title?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  title = 'Đã xảy ra lỗi kết nối',
}) => {
  return (
    <div className="bg-[#fef2f2] border border-[#fecaca] rounded-lg p-4 my-3 text-[#991b1b] shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="text-[16px] leading-tight select-none">⚠️</span>
          <div>
            <h4 className="text-[13px] font-semibold text-[#991b1b] m-0">{title}</h4>
            <p className="text-[12px] text-[#b91c1c] mt-1 mb-0 leading-relaxed">{message}</p>
          </div>
        </div>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="shrink-0 bg-white border border-[#fca5a5] hover:bg-[#fee2e2] text-[#991b1b] text-[12px] font-semibold px-3 py-1.5 rounded-md cursor-pointer transition-colors shadow-2xs"
          >
            Thử lại
          </button>
        )}
      </div>
    </div>
  );
};
