import ListItem from "./list_item";

export default function Work() {
  const workItems = [
    {
        image: "/ragkit.svg", 
        imageAlt: "RagKit",
        title: "RAGkit",
        description: "RAGkit is a JSON first, research-driven toolkit designed to let researchers easily spin up RAG systems and establish standards for Retrieval-Augmented Generation (RAG) systems in academic and industrial research. ",
        buttons: [
          { label: "GitHub", href: "https://github.com/Stratum-Research/RAGkit", variant: "primary" as const },
          { label: "PyPackage", href: "https://huggingface.co/datasets/stratum-research/orthoqa-300", variant: "huggingface" as const },
        ],
      },
    {
      image: "/ortho.svg", 
      imageAlt: "OrthoQA-300",
      title: "OrthoQA-300",
      description: "OrthoQA-300 is a structured, synthetic dataset of 300 patient-provider style question-and-answer (QA) pairs focused on orthopedic surgery. Each entry simulates a realistic clinical interaction, with patient-style questions and LLM-generated provider-style answers. Questions are grouped by procedure (e.g., ACL Reconstruction, Total Hip Replacement) and theme (e.g., \"What is it?\", \"Recovery\", \"Risks\").",
      buttons: [
        { label: "GitHub", href: "https://github.com/Stratum-Research/OrthoQA-300", variant: "primary" as const },
        { label: "HuggingFace", href: "https://huggingface.co/datasets/stratum-research/orthoqa-300", variant: "huggingface" as const },
      ],
      countBadge: {
        value: 170,
        text: "+ Total downloads on HuggingFace"
      }
    },
    {
      image: "/ortho.svg", 
      imageAlt: "OrthoQA-1k",
      title: "OrthoQA-1k",
      description: "Building on OrthoQA-300, this synthetic dataset is an expansion with 1000 patient-provider style question-and-answer (QA) pairs focused on orthopedic surgery!",
      buttons: [
        { label: "Github", href: "https://github.com/Stratum-Research/OrthoQA-1k", variant: "primary" as const },
        { label: "HuggingFace", href: "https://huggingface.co/datasets/stratum-research/orthoqa-1k", variant: "huggingface" as const },
      ]
    },
    {
      image: "/derm1k.svg", 
      imageAlt: "DermQA-1k",
      title: "DermQA-1k",
      description: "DermQA-1k is a synthetic dataset of 1000 patient-provider style question-and-answer (QA) pairs focused on dermatology. Each entry simulates a realistic clinical interaction, with patient-style questions and LLM-generated provider-style answers. Questions are grouped by procedure (e.g., \"What is it?\", \"Recovery\", \"Risks\").",
      buttons: [
        { label: "Github", href: "https://github.com/Stratum-Research/dermQA-1k", variant: "primary" as const },
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
              countBadge={item.countBadge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}