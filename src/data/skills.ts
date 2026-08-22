export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "SQL", "R", "JavaScript", "TypeScript"],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "Computer Vision",
      "Deep Learning",
      "NLP",
      "Generative AI",
    ],
  },
  {
    category: "Development",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
      "Spring Boot",
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Git",
      "Docker",
      "AWS",
      "Vercel",
    ],
  },
];
