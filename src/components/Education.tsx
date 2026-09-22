import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>Education</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/20 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-2">
              SRM Institute of Science and Technology
            </h3>
            <p className="text-gray-300 dark:text-gray-300 mb-4">
              B.Tech — Computer Science & Engineering (Artificial Intelligence & Machine Learning)
            </p>
            <p className="text-gray-200 dark:text-gray-200 font-medium">CGPA: 9.5 / 10</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
