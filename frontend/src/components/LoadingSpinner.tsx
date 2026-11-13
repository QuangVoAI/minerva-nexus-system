import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'Đang tải dữ liệu từ máy chủ...',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-8 h-8 border-3',
  };

  return (
    <div className="flex items-center justify-center gap-3 py-4 text-[#2563eb]">
      <div
        className={`${sizeClasses[size]} border-[#2563eb] border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Đang xử lý"
      />
      {message && <span className="text-[13px] font-medium text-[#475569]">{message}</span>}
    </div>
  );
};
