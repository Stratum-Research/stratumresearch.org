import { Github, Brain, Code, FlaskConical, ExternalLink } from "lucide-react";
import IconButton from "./icon_button";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Company Info - Left Side */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Stratum Research" className="w-10 h-10" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Stratum Research
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
                Applied LLM Systems for Clinical Reasoning
            </p>

          </div>

          {/* Research Links - Right Side */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Research
            </h4>
            <div className="space-y-3">
              <IconButton 
                icon={Github}
                href="https://github.com/stratum-research"
                label="Github"
              />
              <IconButton 
                icon={FlaskConical}
                href="https://huggingface.co/stratum-research"
                label="Hugging Face"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
            © 2025 Stratum Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}