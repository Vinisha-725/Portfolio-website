import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Experience() {
  const experiences = [
    {
      title: "ACM SIGCHI SRM Student Chapter",
      role: "Treasurer",
      description: [
        "Managing financial activities and budget planning",
        "Supporting event organization and coordination",
        "Coordinating student activities and initiatives",
        "Helping conduct technical events and workshops",
      ],
    },
    {
      title: "Technical Projects & AI Development",
      role: "Independent Developer",
      description: [
        "Building AI/ML applications and intelligent systems",
        "Developing full-stack applications with modern frameworks",
        "Creating AI-powered tools and utilities",
        "Working on computer vision systems",
        "Building LLM/RAG applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>Experience & Activities</SectionHeading>
        </FadeIn>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={100 + index * 50}>
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start"
                    >
                      <span className="mr-2 text-gray-400 dark:text-gray-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
