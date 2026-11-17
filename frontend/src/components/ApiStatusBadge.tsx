import React from 'react';

interface ApiStatusBadgeProps {
  status: 'checking' | 'online' | 'offline';
  className?: string;
}

export const ApiStatusBadge: React.FC<ApiStatusBadgeProps> = ({ status, className = '' }) => {
  const config = {
    checking: {
      text: 'Đang kiểm tra...',
      bg: 'bg-[#f1f5f9]',
      border: 'border-[#cbd5e1]',
      textCol: 'text-[#64748b]',
      dot: 'bg-[#94a3b8]',
    },
    online: {
      text: 'Máy chủ Java 8081: Đã kết nối',
      bg: 'bg-[#eff6ff]',
      border: 'border-[#bfdbfe]',
      textCol: 'text-[#1d4ed8]',
      dot: 'bg-[#2563eb]',
    },
    offline: {
      text: 'Máy chủ Java 8081: Chưa chạy (Vui lòng chạy Maven)',
      bg: 'bg-[#fef2f2]',
      border: 'border-[#fecaca]',
      textCol: 'text-[#dc2626]',
      dot: 'bg-[#ef4444]',
    },
  }[status];

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${config.bg} ${config.border} ${config.textCol} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${config.dot} ${status === 'checking' ? 'animate-pulse' : ''}`} />
      <span>{config.text}</span>
    </div>
  );
};
