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
    github: "https://github.com/Vinisha-725/Pneumonia-XRay-Detector",
  },
  {
    id: "ai-mock-interview",
    name: "AI Mock Interview Platform",
    description: "An AI-powered interview platform that analyzes resumes and job descriptions, generates personalized interview questions, and evaluates candidate responses.",
    technologies: ["React", "FastAPI", "Gemini", "Python", "AI/LLMs"],
    github: "https://github.com/Vinisha-725/AI-Mock-Interview-Platform",
  },
  {
    id: "company-policy-chatbot",
    name: "Company Policy Chatbot",
    description: "A document-based AI assistant that allows users to ask questions about company policies using retrieval-augmented generation.",
    technologies: ["Python", "LangChain", "Gemini", "FAISS", "HuggingFace Embeddings"],
    github: "https://github.com/Vinisha-725/RAG-Chatbot",
  },
  {
    id: "geospatial-road-registry",
    name: "Geospatial Road Condition Registry",
    description: "A web platform for visualizing and managing road-condition data using interactive maps and geospatial technologies.",
    technologies: ["React", "TypeScript", "MapLibre", "Deck.gl", "Spring Boot", "PostgreSQL/PostGIS"],
    github: "https://github.com/MRvandals4vage/GeoSpatial-Road-Health-Registry",
    liveDemo: "https://geo-spatial-road-health-registry.vercel.app/",
  },
  {
    id: "driver-drowsiness",
    name: "Driver Drowsiness",
    description: "A real-time computer vision system that monitors driver drowsiness using eye aspect ratio (EAR) and provides audio-visual alerts when drowsiness is detected.",
    technologies: ["React Native", "Opencv", "Mediapipe"],
    github: "https://github.com/Vinisha-725/Driver-Drowsiness",
  },
];
