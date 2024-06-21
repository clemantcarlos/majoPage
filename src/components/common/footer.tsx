'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img src="/logo.png " className="mr-3 h-8" />
            <Typography className="!text-white !text-base font-medium ">
              Majo - Design
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          {/* CAMBIA LINK */}
          <Link
            href=""
            target="_blank"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              AGENDA TU CITA
            </Typography>
          </Link>
          {/* CAMBIA EL LINK */}
          <Link
            href=""
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Terminos y condiciones
            </Typography>
          </Link>
          {/* CAMBIAR EL LINK */}
          <Link
            href="/privacy-policy"
            className="pointer block w-fit"
          >
            <Typography variant="p">
              Politicas de privacidad
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
