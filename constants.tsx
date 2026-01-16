import React from 'react';
import { Box, Video, Layers, PenTool, Lightbulb, Briefcase } from 'lucide-react';
import { ExperienceItem, ProjectItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2024 - Present",
    title: "Cosmetic Brand Collaborator",
    company: "Arike Ray, Skyfly Fragrance & Anua",
    description: "Partnered with premium luxury brands including Arike Ray, Skyfly Fragrance, and Anua Serum to produce luxury product animations. Focused on high-end lighting, fluid simulations for serums, and cinematic color grading in DaVinci Resolve to enhance brand appeal."
  },
  {
    year: "2023 - 2024",
    title: "Automotive Visualization Lead",
    company: "Navister & Cadillac",
    description: "Conceptualized and executed a cinematic commercial for the Cadillac Escalade, demonstrating advanced performance visualization. Mastered complex environment transitions: shifting seamlessly from a high-contrast Dark Theme to Off-road, through a Tunnel, into an Ice Land biome, and finally back to a premium Studio Showroom."
  },
  {
    year: "2022 - 2023",
    title: "Pharmaceutical Motion Designer",
    company: "Medical Visualization Pipeline",
    description: "Developed a specialized 'Pills Commercial' project, utilizing a Biochemistry background to ensure high-fidelity technical accuracy in pharmaceutical modeling. Handled the full production pipeline in Blender, focusing on realistic textures and physics-based motion for medical storytelling."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Automotive Precision (Cadillac Escalade)",
    subtitle: "Cinematic Automotive Visualization",
    category: "CGI Commercial",
    videoUrl: "https://res.cloudinary.com/dozameesu/video/upload/v1768574481/CADILLAC_x_AWODI_kj9vms.mp4", 
    thumbnail: "https://i.ibb.co/x8PXJv41/Gemini-Generated-Image-3btit83btit83bti.png",
    description: "A high-fidelity exploration of the Cadillac Escalade’s form and performance. This project showcases advanced environment transitions, moving from a high-contrast dark theme to rugged off-road terrain, through a technical tunnel sequence, and into a sub-zero Arctic biome. It culminates in a luxury studio showroom reveal, emphasizing photorealistic lighting and dynamic camera choreography."
  },
  {
    id: "2",
    title: "Anua Serum (Cosmetic Commercial)",
    subtitle: "Luxury Skincare Narrative",
    category: "Product Animation",
    videoUrl: "https://res.cloudinary.com/dozameesu/video/upload/v1768573294/anua_prod_animation_A_ryjjdc.mp4",
    thumbnail: "https://i.ibb.co/MxGXjCfL/anua-serum.png",
    description: "A visually stunning advertisement for Anua Serum, focusing on product modeling and material realism. Leveraging a background in Biochemistry to ensure technical accuracy, this project highlights fluid simulations and macro-cinematography. The lighting and texturing were meticulously crafted in Blender to evoke a sense of purity and clinical excellence."
  },
  {
    id: "3",
    title: "iPhone 17 Pro Max (Tech Visualization)",
    subtitle: "Next-Gen Industrial Design",
    category: "Motion Design",
    videoUrl: "https://res.cloudinary.com/dozameesu/video/upload/v1768575878/get_mwjkeb.mp4",
    thumbnail: "https://i.ibb.co/wfdjhJB/Gemini-Generated-Image-u7pqihu7pqihu7pq.png",
    description: "A speculative 3D animation of the iPhone 17 Pro Max, focusing on industrial design and precision modeling. This commercial highlights the device's technical specifications through \"exploded-view\" animations and macro close-ups of metallic textures. The project demonstrates the ability to translate complex consumer electronics into impactful, high-quality visual experiences."
  },
  {
    id: "4",
    title: "SkyFly Fragrance (From Factory Line to Refined Luxury)",
    subtitle: "The Luxury Journey: Process & Result",
    category: "Visual Narrative",
    videoUrl: "https://res.cloudinary.com/dozameesu/video/upload/v1768575883/Part_2..._What_do_you_guys_think_Dope_right_Needs_your_product_animated_Send_a_Dm_luxury_blen_v4kts5.mp4",
    thumbnail: "https://i.ibb.co/0RtWKFHW/0870.png",
    description: "A dual-part cinematic narrative that bridges the gap between industrial production and luxury branding. Part 01 explores the \"Factory Line,\" showcasing mechanical precision and structural modeling. Part 02 reveals the final \"Refined Luxury,\" utilizing advanced fluid dynamics and cinematic color grading in DaVinci Resolve to create a high-fidelity fragrance commercial."
  }
];

export const SKILLS = [
  { name: "3D Modeling", icon: <Box className="w-6 h-6" />, level: "Mastery" },
  { name: "Animation", icon: <Video className="w-6 h-6" />, level: "Expert" },
  { name: "Texturing", icon: <Layers className="w-6 h-6" />, level: "Advanced" },
  { name: "Lighting", icon: <Lightbulb className="w-6 h-6" />, level: "Expert" },
  { name: "Composition", icon: <PenTool className="w-6 h-6" />, level: "Expert" },
  { name: "Post-Processing", icon: <Briefcase className="w-6 h-6" />, level: "Expert" }
];

export const CONTACT_INFO = {
  email: "awodi.3d@gmail.com",
  phone: "+2347069377546",
  location: "Nigeria / Remote"
};

export const SOCIAL_LINKS = [
  { label: "Behance", url: "https://www.behance.net/awodiabdulsamad" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/awodi-abdulsamad/" },
  { label: "Instagram", url: "https://www.instagram.com/awodi_viii/" },
  { label: "TikTok", url: "https://www.tiktok.com/@awodi.3d" },
  { label: "X", url: "https://x.com/Awodi08" },
  { label: "WhatsApp", url: "https://wa.me/2347069377546" }
];