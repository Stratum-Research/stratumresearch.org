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
  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors",
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
      {label}
    </a>
  );
}