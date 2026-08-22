export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "ai-medical-imaging",
    name: "AI Medical Imaging",
    description: "An AI-powered chest X-ray classification system using deep learning to distinguish between normal and pneumonia cases, with explainable AI using Grad-CAM.",
    technologies: ["PyTorch", "DenseNet-121", "Computer Vision", "Grad-CAM", "Streamlit"],
    github: "https://github.com/yourusername/ai-medical-imaging",
  },
  {
    id: "ai-mock-interview",
    name: "AI Mock Interview Platform",
    description: "An AI-powered interview platform that analyzes resumes and job descriptions, generates personalized interview questions, and evaluates candidate responses.",
    technologies: ["React", "FastAPI", "Gemini", "Python", "AI/LLMs"],
    github: "https://github.com/yourusername/ai-mock-interview",
    liveDemo: "https://ai-mock-interview.vercel.app",
  },
  {
    id: "company-policy-chatbot",
    name: "Company Policy Chatbot",
    description: "A document-based AI assistant that allows users to ask questions about company policies using retrieval-augmented generation.",
    technologies: ["Python", "LangChain", "Gemini", "FAISS", "HuggingFace Embeddings"],
    github: "https://github.com/yourusername/company-policy-chatbot",
  },
  {
    id: "geospatial-road-registry",
    name: "Geospatial Road Condition Registry",
    description: "A web platform for visualizing and managing road-condition data using interactive maps and geospatial technologies.",
    technologies: ["React", "TypeScript", "MapLibre", "Deck.gl", "Spring Boot", "PostgreSQL/PostGIS"],
    github: "https://github.com/yourusername/geospatial-road-registry",
    liveDemo: "https://road-registry.vercel.app",
  },
  {
    id: "book-recommendation",
    name: "Book Recommendation System",
    description: "A recommendation application that suggests books based on user preferences using machine-learning/recommendation techniques.",
    technologies: ["Python", "Pandas", "Machine Learning", "Streamlit"],
    github: "https://github.com/yourusername/book-recommendation",
    liveDemo: "https://book-rec.streamlit.app",
  },
  {
    id: "budget-tracker",
    name: "Budget Tracker",
    description: "A mobile application for tracking personal expenses and managing budgets.",
    technologies: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/yourusername/budget-tracker",
  },
];
