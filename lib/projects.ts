export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  accent: string // oklch color used as the card accent
  link?: string
  git?: string
  video?: string // youtube embed url
  image?: string // local image path
}

export const projects: Project[] = [
  {
    id: "coleccion-lorenza",
    title: "Colección Lorenza · E-Commerce",
    description:
      "E-commerce full-stack con blog y portafolio integrados, que incluye gestión de contenido, catálogo de productos, carrito de compras, procesamiento de pagos y panel de administración.",
    tech: ["Django", "Vue", "PostgreSQL", "Redis"],
    accent: "oklch(0.74 0.16 300)",
    link: "https://colecccionlorenza.com",
    image: "/projects/lorenza.png",
  },
  {
    id: "island-finance",
    title: "Island Finance · Personal finance web app",
    description:
      "Plataforma de gestión financiera personal que utiliza la metáfora de archipiélagos e islas para organizar tus finanzas: cada propósito financiero es un archipiélago y cada cuenta, una isla. Calcula intereses, registra movimientos, permite establecer metas de ahorro y visualiza activos y criptomonedas en tiempo real",
    tech: ["Django", "Vue", "PostgreSQL", "Redis"],
    accent: "oklch(0.7 0.1 198)",
    link: "https://islandfinance.cc",
    image: "/projects/islandfinance.jfif",
  },
  {
    id: "glucobalance-multi",
    title: "GlucoBalance · Multiplataforma",
    description:
      "App móvil multiplataforma hecha con React Native y respaldada por una API en Spring Boot. Diseñada para personas con diabetes, promueve hábitos saludables y ayuda a mantener un control adecuado de los niveles de glucosa.",
    tech: ["React Native", "TypeScript", "Spring Boot", "Java", "MySQL"],
    accent: "oklch(0.78 0.18 145)",
    video: "https://www.youtube.com/embed/D8alwyK5eeE",
    git: "https://github.com/Isva23/GlucoBalance-ios-android.git",
  },
  {
    id: "maskdetect",
    title: "MaskDetect · Detección en tiempo real",
    description:
      "Detector de cubrebocas desarrollado en Python con un dataset entrenado en YOLOv5. Reconoce en tiempo real si una persona lleva cubrebocas, incluso en multitudes y distintos ángulos, y guarda registros en base de datos.",
    tech: ["Python", "YOLOv5", "MySQL", "HTML", "PHP"],
    accent: "oklch(0.72 0.16 230)",
    video: "https://www.youtube.com/embed/LGjTJt-rINQ",
    git: "https://github.com/NeftaliBa/Visiomex.git",
  },

  {
    id: "mibicimzo",
    title: "MiBiciMzo",
    description:
      "App móvil multiplataforma desarrollada con React Native y una API creada con Spring Boot. Concebida como una solución para gestionar los bicipuertos planificados en Manzanillo, Colima.",
    tech: ["React Native", "Spring Boot", "Java", "MySQL"],
    accent: "oklch(0.7 0.19 350)",
    git: "https://github.com/morkmorquecho/Mi-Bici-Mzo-API",
    image: "/projects/mibicimzo.jpg",
  },

  {
    id: "glucobalance-android",
    title: "GlucoBalance · Android",
    description:
      "Primera versión de GlucoBalance, desarrollada en Android Studio con Java y Firestore de Firebase como base de datos NoSQL documental. Conserva en gran medida las funcionalidades de su sucesor.",
    tech: ["Android Studio", "Java", "Firebase"],
    accent: "oklch(0.76 0.15 90)",
    video: "https://www.youtube.com/embed/Kkg0FOp6p1c",
    git: "https://github.com/Isva23/GlucoBalance.git",
  },
    {
    id: "calculadora-etsy",
    title: "Calculadora de Ingresos de Etsy",
    description:
      "Web hecha en React para calcular los ingresos de una venta en Etsy. Considera las tarifas aplicables y el costo del servicio de paquetería a partir de la venta realizada.",
    tech: ["React", "JavaScript", "CSS"],
    accent: "oklch(0.75 0.17 50)",
    link: "https://calculadora-tarifas-etsy.netlify.app/",
    git: "https://github.com/morkmorquecho/CalculadoraEtsy.git",
    image: "/projects/etsy.jpg",
  },
]
