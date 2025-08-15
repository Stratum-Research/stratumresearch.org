import { NumberTicker } from "@/components/magicui/number-ticker";
import { ChevronRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { CountBadge } from "./count_badge";

interface ListItemProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'huggingface';
  }[];
  countBadge?: {
    value: number;
    text: string;
  };
}

export default function ListItem({ image, imageAlt, title, description, buttons, countBadge }: ListItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-50 py-5 bg-white dark:bg-slate-800 ">
      {/* Image - Left Side */}
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full md:w-32 h-32 object-cover rounded-lg"
        />
      </div>
      
      {/* Content - Right Side */}
      <div className="flex-1 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        {countBadge && (
          <CountBadge text={countBadge.text} value={countBadge.value} />     
        )}

        
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                button.variant === 'primary'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                  : button.variant === 'huggingface'
                  ? 'bg-yellow-600 dark:bg-white text-white dark:text-yellow-900 hover:bg-yellow-800 dark:hover:bg-slate-100'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {button.label}
              <ChevronRight className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}