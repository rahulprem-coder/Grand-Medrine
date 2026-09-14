import React from 'react';

interface BotanicalDecorationProps {
  className?: string;
  variant?: 'branch-right' | 'branch-left' | 'corner' | 'flourish' | 'wreath';
  color?: string;
}

export const BotanicalDecoration: React.FC<BotanicalDecorationProps> = ({
  className = 'w-24 h-24',
  variant = 'branch-right',
  color = '#B8A27C'
}) => {
  if (variant === 'branch-right') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M15 105C35 85 55 60 100 20"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Leaves along branch */}
        <path
          d="M45 76C40 68 42 58 52 60C58 61 60 70 45 76Z"
          stroke={color}
          strokeWidth="1.2"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          d="M50 72C60 70 68 74 65 83C62 88 53 84 50 72Z"
          stroke={color}
          strokeWidth="1.2"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          d="M65 57C62 48 66 38 75 42C80 44 80 53 65 57Z"
          stroke={color}
          strokeWidth="1.2"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          d="M72 52C82 52 89 58 84 66C80 71 73 64 72 52Z"
          stroke={color}
          strokeWidth="1.2"
          fill={color}
          fillOpacity="0.12"
        />
        <path
          d="M85 36C83 27 90 20 98 24C102 27 101 35 85 36Z"
          stroke={color}
          strokeWidth="1.2"
          fill={color}
          fillOpacity="0.12"
        />
      </svg>
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M10 70C10 36.8629 36.8629 10 70 10"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx="10" cy="70" r="2.5" fill={color} />
        <circle cx="70" cy="10" r="2.5" fill={color} />
        <path
          d="M25 60C30 45 45 30 60 25"
          stroke={color}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M38 42C34 36 38 29 45 32C49 34 47 41 38 42Z"
          stroke={color}
          strokeWidth="0.8"
          fill={color}
          fillOpacity="0.15"
        />
      </svg>
    );
  }

  if (variant === 'flourish') {
    return (
      <svg
        viewBox="0 0 160 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M10 15H65M95 15H150"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M80 5L84 15L80 25L76 15L80 5Z"
          stroke={color}
          strokeWidth="1"
          fill={color}
          fillOpacity="0.3"
        />
        <circle cx="68" cy="15" r="2" fill={color} />
        <circle cx="92" cy="15" r="2" fill={color} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="32" stroke={color} strokeWidth="0.75" />
      <path
        d="M50 20C55 30 65 40 75 45C65 50 55 60 50 70C45 60 35 50 25 45C35 40 45 30 50 20Z"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.1"
      />
    </svg>
  );
};
