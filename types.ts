export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}