import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";


export function CountBadge({ text, value }: { text: string, value: number }) {
  return (
    <div className="flex items-center justify-left">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          ✨
          <NumberTicker value={value}         
            className="whitespace-pre-wrap tracking-tighter text-neutral dark:text-white"
        />
          <span>{" " + text}</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
