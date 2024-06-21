import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

import EmblaCarousel from '@/components/common/carousel'
import { type EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDES = [1, 2, 3, 4]

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Diseñadora de Moda Profesional
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Mi trabajo implica una combinación de creatividad,
          pasión, dedicación y trabajo duro para realizar
          las mejores piezas.
        </Typography>
        {/* CHANGE LINK */}
        <Link href="" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Encarga aqui`}
          </Button>
        </Link>
        <div>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.jpeg"
          />
        </div>
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Aqui garantizamos
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Rapidez y calidad"
              description="Con nuestro servicio garantizamos calidad y rapidez en la confeccion de las piezas."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Confeccion universal"
              description="Creamos de prendas de vestir que se ajusten a diferentes estilos, tallas y gustos."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Servicio empresarial"
              description="Realizamos grandes conjuntos de prendas con muy buenos precios."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Confecciones - Colecciones
          </Typography>
          {/* <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography> */}
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Contactame ahora
          </Typography>
          <div>Agenda una cita, o haz una llamada</div>
          <Link
          // CAMBIAR LINK
            href=""
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Contactame`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
