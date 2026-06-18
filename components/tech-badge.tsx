import type { IconType } from "react-icons"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCss,
  SiPython,
  SiDjango,
  SiVuedotjs,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiSpringboot,
  SiFirebase,
  SiPhp,
  SiHtml5,
  SiAndroidstudio,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

type TechMeta = {
  Icon: IconType
  color: string
}

const techMap: Record<string, TechMeta> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  Python: { Icon: SiPython, color: "#3776AB" },
  YOLOv5: { Icon: SiPython, color: "#3776AB" },
  Django: { Icon: SiDjango, color: "#44B78B" },
  Vue: { Icon: SiVuedotjs, color: "#42B883" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  Java: { Icon: FaJava, color: "#E76F00" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  "Android Studio": { Icon: SiAndroidstudio, color: "#3DDC84" },
}

export function TechBadge({ name }: { name: string }) {
  const meta = techMap[name]
  if (!meta) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
        {name}
      </span>
    )
  }
  const { Icon, color } = meta
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
      <Icon aria-hidden style={{ color }} className="size-3.5" />
      {name}
    </span>
  )
}

export function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
      {tech.map((t) => (
        <li key={t}>
          <TechBadge name={t} />
        </li>
      ))}
    </ul>
  )
}
