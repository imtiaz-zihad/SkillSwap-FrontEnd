import { Coins } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoinBadgeProps {
  amount: number;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export function CoinBadge({ amount, size = "md", showIcon = true, className }: CoinBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <div className={cn("coin-display", sizeClasses[size], className)}>
      {showIcon && <Coins size={iconSizes[size]} />}
      <span>{amount.toLocaleString()}</span>
    </div>
  );
}
