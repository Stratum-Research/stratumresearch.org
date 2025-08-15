import ListItem from "./list_item";

export default function Work() {
  const workItems = [
    {
      image: "/logo.svg", // Using your logo as placeholder
      imageAlt: "Clinical Reasoning Tools",
      title: "Clinical Reasoning Tools",
      description: "We&apos;re building LLM-based tools to assist with clinical reasoning. Still early stages, but we&apos;re exploring how AI can support medical decision-making processes.",
      buttons: [
        { label: "GitHub", href: "https://github.com/stratum-research", variant: "primary" as const },
        { label: "HuggingFace", href: "https://huggingface.co/stratum-research", variant: "huggingface" as const },

    ]
    },
    {
      image: "/logo.svg", // Using your logo as placeholder
      imageAlt: "Medical Data Processing",
      title: "Medical Data Processing",
      description: "Working on tools to process and structure medical information. We&apos;re learning how to handle clinical data responsibly while building useful research infrastructure.",
      buttons: [
        { label: "Github", href: "https://github.com/stratum-research", variant: "primary" as const },
      ]
    },
    {
      image: "/logo.svg", // Using your logo as placeholder
      imageAlt: "Research Experiments",
      title: "Research Experiments",
      description: "Running experiments with language models on medical reasoning tasks. We&apos;re still figuring things out, but hoping to contribute something meaningful to the field.",
      buttons: [
        { label: "Github", href: "https://github.com/stratum-research", variant: "primary" as const },
      ]
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What We&apos;re Building
          </h2>
          {/* <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our goal is to contribute meaningfully to the intersection of LLMs and healthcare!
          </p> */}
        </div>

        {/* Work Items List */}
        <div className="space-y-8">
          {workItems.map((item, index) => (
            <ListItem
              key={index}
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              buttons={item.buttons}
            />
          ))}
        </div>
      </div>
    </section>
  )
}