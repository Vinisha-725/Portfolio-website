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
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              SRM Institute of Science and Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              B.Tech — Computer Science & Engineering (Artificial Intelligence & Machine Learning)
            </p>
            <p className="text-gray-700 dark:text-gray-200 font-medium">CGPA: 9.5 / 10</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
