import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>Skills & Technologies</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category) => (
              <div key={category.category} className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/10 dark:bg-gray-800/60 text-gray-200 dark:text-gray-300 text-sm rounded-md border border-white/20 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
