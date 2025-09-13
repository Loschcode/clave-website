import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import WhatsAppWidget from '@/components/whatsapp-widget'

function App() {
  const samples = [
    { title: 'El Flaco y El Fierros', src: '/El Flaco y El Fierros.mp3' },
    { title: 'Los Mismos de Siempre', src: '/Los Mismos de Siempre.mp3' },
    { title: 'Ya ni pa’ qué mentirnos', src: '/Ya ni pa’ qué mentirnos.mp3' },
  ] as const

  const [currentIndex, setCurrentIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!audioRef.current) return
    // Reload the audio source when the track changes
    audioRef.current.load()
  }, [currentIndex])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Hero with parallax background and overlaid text */}
      <section
        className="relative w-full bg-cover bg-center md:bg-fixed overflow-hidden"
        style={{ backgroundImage: "url(/images/hero-logo.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:py-10 flex flex-col items-center justify-start text-center">
          <Reveal as="p" delayMs={120} direction="up" className="text-sm uppercase tracking-widest text-zinc-200">
            Clave 7 Records
          </Reveal>
          <Reveal delayMs={180} direction="up" className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-zinc-900 shadow-sm ring-1 ring-black/10 backdrop-blur">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-primary"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l2.5 2.5L16 9" />
            </svg>
            <span>Satisfacción 100% garantizada</span>
          </Reveal>
          <Reveal delayMs={220} direction="up">
          <h1
            className="preSlide slideIn h1 font-['Ubuntu'] leading-tight mt-2 text-white animate-in fade-in-50 slide-in-from-bottom-2 duration-700 motion-reduce:animate-none [animation-delay:220ms]"
            style={{
              textAlign: 'center',
              whiteSpace: 'pre-wrap',
              transitionTimingFunction: 'ease',
              transitionDuration: '0.6s',
              transitionDelay: '0.221739s',
            }}
          >
            <span className="font-normal text-white">Tu corrido personalizado</span>
            <br />
            <strong>De </strong>
            <span style={{ textDecoration: 'line-through' }}>
              <strong>$600</strong>
            </span>
            <br />
            <strong>a </strong>
            <span style={{ color: '#ab281f' }}>
              <strong>$249</strong>
            </span>
          </h1>
          </Reveal>
          <Reveal delayMs={300} direction="up" className="mt-3 flex justify-center">
            <Badge size="xl">Oferta limitada</Badge>
          </Reveal>
          <Reveal as="p" delayMs={380} direction="up" className="mt-4 text-base md:text-lg text-zinc-100/90 max-w-2xl mx-auto">
            Crea tu corrido personalizado en 24h: el regalo perfecto para cumpleaños,
            aniversarios y más. Sorprende con una canción única hecha a medida.
          </Reveal>
          <Reveal delayMs={460} direction="up" className="mt-6">
            <a href="https://tally.so/r/wgz46M" target="_blank" rel="noreferrer">
              <Button className="text-white" size="xl">Ordena Tu Corrido Ahora</Button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">¿Cómo funciona?</h2>
        <p className="text-zinc-600 text-center mt-2">Proceso sencillo en 3 pasos.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Reveal direction="left">
          <Card>
            <CardHeader>
              <CardTitle>1. Cuéntanos tu historia</CardTitle>
            </CardHeader>
            <CardContent>
              Comparte detalles, anécdotas y el estilo que prefieres. Nos sirve para construir una letra auténtica.
            </CardContent>
          </Card>
          </Reveal>
          <Reveal direction="up" delayMs={120}>
          <Card>
            <CardHeader>
              <CardTitle>2. Componemos y grabamos</CardTitle>
            </CardHeader>
            <CardContent>
              Nuestro equipo escribe, compone y graba con calidad profesional, manteniéndote al tanto del progreso.
            </CardContent>
          </Card>
          </Reveal>
          <Reveal direction="right" delayMs={240}>
          <Card>
            <CardHeader>
              <CardTitle>3. Entrega en 24 horas</CardTitle>
            </CardHeader>
            <CardContent>
              Recibe tu corrido listo para compartir en formato MP3 y WAV. Revisión ligera incluida.
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </section>

      {/* Testimonial + Audio */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <Reveal as="blockquote" className="max-w-3xl mx-auto text-center" direction="up">
          <p className="text-xl md:text-2xl font-medium">
            “Le pedí a Clave 7 un corrido para el cumple de mi hermano. Les conté anécdotas, su apodo y cómo empezó el negocio familiar.
            En menos de 24 horas teníamos una rola increíble que hizo llorar a todos. Es justo lo que imaginamos.”
          </p>
          <footer className="mt-2 text-zinc-600">— Carlos M. (CDMX)</footer>
        </Reveal>
        <Reveal className="mt-8" direction="up" delayMs={120}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-2 text-sm text-zinc-600">Escucha ejemplos reales</div>
            <div className="flex flex-wrap gap-2 justify-center">
              {samples.map((track, i) => (
                <Button
                  key={track.src}
                  variant={i === currentIndex ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setCurrentIndex(i)
                    // Attempt to play immediately after interaction
                    setTimeout(() => audioRef.current?.play().catch(() => {}), 0)
                  }}
                >
                  {i === currentIndex ? '▶︎ ' : ''}{track.title}
                </Button>
              ))}
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="text-sm text-zinc-700 mb-1">Ahora suena: {samples[currentIndex].title}</div>
              <audio ref={audioRef} controls className="w-full max-w-xl">
                <source src={samples[currentIndex].src} type="audio/mpeg" />
                Tu navegador no soporta audio.
              </audio>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-8 text-center" direction="up" delayMs={220}>
          <a href="https://tally.so/r/wgz46M" target="_blank" rel="noreferrer">
            <Button size="xl" className="text-white">Ordena Tu Corrido Ahora</Button>
          </a>
        </Reveal>
      </section>

      {/* Preguntas frecuentes */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <Reveal as="h2" direction="up" className="text-2xl md:text-3xl font-semibold text-center">Preguntas frecuentes</Reveal>
        <Reveal direction="up" delayMs={120}>
        <Accordion type="single" collapsible className="mt-6 text-left">
          <AccordionItem value="faq-1">
            <AccordionTrigger>¿Qué es un corrido personalizado y cómo funciona?</AccordionTrigger>
            <AccordionContent>
              <p>
                Un corrido personalizado es una canción única, creada con base en la historia y detalles que tú nos compartes. En Clave 7 Records transformamos tu historia en un corrido tumbado, norteño o banda, con letra y música original. Solo completas un formulario, eliges el estilo y recibes tu canción en 24 horas. ¡El regalo más original y emotivo!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>¿Cuánto cuesta un corrido personalizado en Clave 7 Records?</AccordionTrigger>
            <AccordionContent>
              <p>
                Nuestro corrido personalizado tiene un precio promocional de $600 MXN, con calidad profesional y entrega en menos de 24 horas. ¡Consulta nuestros precios y promociones vigentes!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>¿Cuáles son los métodos de pago disponibles?</AccordionTrigger>
            <AccordionContent>
              <p>
                Aceptamos pagos con tarjeta de crédito/débito, PayPal y OXXO Pay para mayor comodidad y seguridad. Nuestro sistema es 100% confiable y protegido para garantizar una compra segura.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>¿Puedo pedir cambios si no estoy satisfecho con el corrido?</AccordionTrigger>
            <AccordionContent>
              <p>
                ¡Sí! Garantizamos tu satisfacción. Incluimos una revisión gratuita para ajustar letra o detalles menores. Queremos que tu corrido personalizado supere tus expectativas.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>¿Cómo sé que Clave 7 Records es confiable?</AccordionTrigger>
            <AccordionContent>
              <p>
                Contamos con más de 500 clientes satisfechos en México y USA.
              </p>
              <p className="mt-3 font-medium">Ofrecemos:</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Pago seguro.</li>
                <li>Entrega garantizada en 24 horas.</li>
                <li>Opiniones reales y ejemplos de corridos en nuestro sitio.</li>
              </ul>
              <p className="mt-2">
                Además, tenemos sello de Calidad Garantizada y opción de pequeñas revisiones sin costo extra.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>¿Qué información necesito proporcionar para personalizar mi corrido?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre(s) de la persona o destinatario.</li>
                <li>Ocasión especial (cumpleaños, aniversario, propuesta, etc.).</li>
                <li>Estilo de corrido preferido: tumbado, norteño o banda.</li>
                <li>Detalles importantes: anécdotas, frases o historias que quieras incluir.</li>
              </ul>
              <p className="mt-2">
                Completar el formulario toma menos de 5 minutos y garantiza que tu canción sea única y hecha a medida. ¡Todo fácil y rápido!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </Reveal>
        <div className="text-center mt-8">
          <a href="https://wa.me/5210000000000" target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg">Escríbenos por WhatsApp</Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Clave 7 Records
      </footer>
      {/* Floating WhatsApp chat widget */}
      <WhatsAppWidget phone="5210000000000" />
    </div>
  )
}

export default App
