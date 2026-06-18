import { Code2, Smartphone, Brain, Server } from "lucide-react"

const focos = [
  { Icon: Code2, label: "Web", desc: "Vue, React " },
  { Icon: Smartphone, label: "Móvil", desc: "React Native & Android" },
  { Icon: Server, label: "Backend", desc: "Django drf, flask,Spring Boot & APIs" },
  { Icon: Brain, label: "IA", desc: "Visión artificial, chat bots, automatizacion de procesos" },
]

export function About() {
  return (
    <section id="sobre-mi" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-sm text-primary">// sobre mí</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance">
            Un poco sobre mi
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
          Soy Ingeniero en Software, egresado hace un año y con más de dos años de experiencia desarrollando soluciones para terminales portuarias y agencias aduanales.
          </p>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Soy una persona perseverante y autodidacta que disfruta aprender constantemente, 
            afrontar desafíos técnicos y trabajar en equipo. Creo que las mejores soluciones nacen cuando diferentes perspectivas y experiencias se unen para resolver un mismo problema.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {focos.map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-4"
            >
              <Icon className="size-6 text-primary" />
              <span className="font-heading font-semibold">{label}</span>
              <span className="text-xs text-muted-foreground">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
