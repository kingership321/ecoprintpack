// components/NepalFlag.tsx
import React from 'react';

interface NepalFlagProps {
  className?: string;
  style?: React.CSSProperties;
}

export function NepalFlag({ className = 'w-3.5 h-4.5 inline-block align-middle', style }: NepalFlagProps) {
  return (
    <img
      src="/asset/flag-of-nepal.svg"
      alt="Flag of Nepal"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      loading="lazy"
    />
  );
}

export default NepalFlag;
