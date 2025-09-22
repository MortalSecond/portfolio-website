import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface ProjectCardProps {
  language: "EN" | "ES"
  title: string;
  desc: string;
  link?: string;
}

export default function ProjectCard({language, title, desc, link }: ProjectCardProps) {
  const translations = { EN: en, ES: es }
  const t = translations[language].buttons

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-gray-400">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline"
        >
          {t.viewGithub}
        </a>
      )}
    </div>
  );
}