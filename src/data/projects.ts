export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "ai-medical-imaging",
    name: "AI Medical Imaging",
    description: "An AI-powered chest X-ray classification system using deep learning to distinguish between normal and pneumonia cases, with explainable AI using Grad-CAM.",
    fullDescription: "Developed an AI-powered chest X-ray classification system using deep learning to accurately distinguish between normal and pneumonia cases. Implemented DenseNet-121 architecture for high-accuracy classification and integrated Grad-CAM (Gradient-weighted Class Activation Mapping) for explainable AI, allowing medical professionals to understand which regions of the X-ray contributed to the classification. Built a user-friendly Streamlit interface for easy deployment and use by healthcare professionals.",
    technologies: ["PyTorch", "DenseNet-121", "Computer Vision", "Grad-CAM", "Streamlit"],
    github: "https://github.com/Vinisha-725/Pneumonia-XRay-Detector",
  },
  {
    id: "ai-mock-interview",
    name: "AI Mock Interview Platform",
    description: "An AI-powered interview platform that analyzes resumes and job descriptions, generates personalized interview questions, and evaluates candidate responses.",
    fullDescription: "Built an end-to-end AI-powered mock interview platform that helps candidates prepare for job interviews. The system analyzes uploaded resumes and job descriptions using natural language processing, generates personalized interview questions based on the specific role and candidate's experience, and evaluates candidate responses using AI models. Implemented using React for the frontend, FastAPI for the backend, and integrated Google's Gemini AI for intelligent question generation and response evaluation.",
    technologies: ["React", "FastAPI", "Gemini", "Python", "AI/LLMs"],
    github: "https://github.com/Vinisha-725/AI-Mock-Interview-Platform",
  },
  {
    id: "company-policy-chatbot",
    name: "Company Policy Chatbot",
    description: "A document-based AI assistant that allows users to ask questions about company policies using retrieval-augmented generation.",
    fullDescription: "Developed a document-based AI assistant that enables employees to quickly find answers to questions about company policies. Implemented using Retrieval-Augmented Generation (RAG) architecture with LangChain framework. The system processes company policy documents, creates embeddings using HuggingFace models, stores them in a FAISS vector database for efficient retrieval, and uses Gemini AI to generate accurate, context-aware responses. Provides a natural language interface for querying policy documents.",
    technologies: ["Python", "LangChain", "Gemini", "FAISS", "HuggingFace Embeddings"],
    github: "https://github.com/Vinisha-725/RAG-Chatbot",
  },
  {
    id: "geospatial-road-registry",
    name: "Geospatial Road Condition Registry",
    description: "A web platform for visualizing and managing road-condition data using interactive maps and geospatial technologies.",
    fullDescription: "Contributed to a comprehensive web platform for visualizing and managing road-condition data using interactive maps and geospatial technologies. The platform allows users to view road conditions across different regions, filter by various parameters, and manage road health data. Built with React and TypeScript for the frontend, MapLibre and Deck.gl for interactive map visualizations, Spring Boot for the backend API, and PostgreSQL with PostGIS extension for geospatial data storage and queries.",
    technologies: ["React", "TypeScript", "MapLibre", "Deck.gl", "Spring Boot", "PostgreSQL/PostGIS"],
    github: "https://github.com/MRvandals4vage/GeoSpatial-Road-Health-Registry",
    liveDemo: "https://geo-spatial-road-health-registry.vercel.app/",
  },
  {
    id: "driver-drowsiness",
    name: "Driver Drowsiness",
    description: "A real-time computer vision system that monitors driver drowsiness using eye aspect ratio (EAR) and provides audio-visual alerts when drowsiness is detected.",
    fullDescription: "Developed a real-time computer vision system to monitor driver drowsiness and prevent accidents. The system uses MediaPipe for facial landmark detection and calculates the Eye Aspect Ratio (EAR) to determine if the driver's eyes are closed for extended periods. When drowsiness is detected, the system provides audio-visual alerts to wake the driver. Built using React Native for cross-platform mobile application support, OpenCV for image processing, and MediaPipe for efficient facial landmark detection in real-time.",
    technologies: ["React Native", "Opencv", "Mediapipe"],
    github: "https://github.com/Vinisha-725/Driver-Drowsiness",
  },
];
