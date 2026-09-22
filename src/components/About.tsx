import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import Terminal from "./Terminal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>About Me</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-200 dark:text-gray-300 mb-6">
                I am a B.Tech Computer Science & Engineering (AI/ML) student at SRM Institute of Science
                and Technology, passionate about building intelligent systems and modern software
                applications.
              </p>
              <p className="text-lg text-gray-200 dark:text-gray-300 mb-6">
                My interests span across artificial intelligence, machine learning, software
                engineering, and full-stack development. I enjoy working across the stack, from
                machine-learning models and AI systems to modern web applications.
              </p>
              <p className="text-lg text-gray-200 dark:text-gray-300">
                I am driven by the opportunity to create practical technology that solves real-world
                problems and makes a meaningful impact.
              </p>
            </div>
            
            <div>
              <Terminal />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
