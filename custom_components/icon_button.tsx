import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  href: string;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export default function IconButton({ 
  icon: Icon, 
  href, 
  label, 
  className = "p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all duration-200",
  iconClassName = "w-6 h-6 text-slate-600 dark:text-slate-400"
}: IconButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      className={className}
      aria-label={label}
    >
      <Icon className={iconClassName} />
    </a>
  );
}
