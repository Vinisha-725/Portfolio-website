import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>About Me</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a B.Tech Computer Science & Engineering (AI/ML) student at SRM Institute of Science
                and Technology, passionate about building intelligent systems and modern software
                applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My interests span across artificial intelligence, machine learning, software
                engineering, and full-stack development. I enjoy working across the stack, from
                machine-learning models and AI systems to modern web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I am driven by the opportunity to create practical technology that solves real-world
                problems and makes a meaningful impact.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Education</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    B.Tech Computer Science & Engineering (AI/ML)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Institution</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    SRM Institute of Science and Technology
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">CGPA</p>
                  <p className="text-gray-900 dark:text-white font-medium">9.5 / 10</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Focus</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    AI/ML • Software Engineering • Full Stack Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
