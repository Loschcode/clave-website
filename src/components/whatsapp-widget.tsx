import React, { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path fill="#25D366" d="M16.004 3.2c-7.047 0-12.8 5.751-12.8 12.8 0 2.26.592 4.402 1.624 6.256L3.2 28.8l6.704-1.688a12.72 12.72 0 0 0 6.1 1.536c7.047 0 12.8-5.753 12.8-12.8s-5.753-12.8-12.8-12.8Zm0 23.04c-2.071 0-3.997-.622-5.604-1.689l-.401-.263-3.992 1.006 1.064-3.89-.26-.401A10.08 10.08 0 1 1 26.08 16c0 5.56-4.516 10.24-10.076 10.24Z"/>
      <path fill="#fff" d="M22.653 18.88c-.3-.15-1.77-.873-2.044-.973-.275-.1-.475-.15-.675.151-.201.299-.775.973-.95 1.172-.175.2-.35.225-.65.075-.3-.15-1.266-.466-2.413-1.485-.892-.797-1.493-1.78-1.668-2.079-.175-.3-.018-.462.132-.612.136-.136.3-.35.45-.525.15-.175.2-.3.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.627-.925-2.225-.244-.586-.493-.506-.675-.515l-.575-.01c-.2 0-.524.075-.8.375-.275.299-1.05 1.025-1.05 2.5 0 1.474 1.075 2.9 1.225 3.099.15.2 2.116 3.233 5.133 4.54.718.31 1.277.494 1.713.632.72.229 1.376.197 1.894.12.577-.086 1.77-.724 2.02-1.423.25-.699.25-1.299.175-1.423-.075-.125-.275-.2-.575-.35Z"/>
    </svg>
  )
}

function digitsOnly(phone: string) {
  return phone.replace(/\D/g, '')
}

export interface WhatsAppWidgetProps {
  phone: string
  message?: string
  className?: string
}

export function WhatsAppWidget({ phone, message = 'Hola, quiero un corrido personalizado. Vi la página de Clave 7 Records.', className }: WhatsAppWidgetProps) {
  const [open, setOpen] = useState(false)
  const phoneDigits = useMemo(() => digitsOnly(phone), [phone])
  const url = useMemo(() => `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`, [phoneDigits, message])

  return (
    <div className={cn('fixed z-50 right-4 bottom-4', className)}>
      {open && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-xl border border-black/10 bg-white/95 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-2 rounded-t-xl" style={{ backgroundColor: '#25D366' }}>
            <div className="flex items-center gap-2 text-white">
              <WhatsAppIcon className="h-6 w-6" />
              <span className="font-medium">Chatea por WhatsApp</span>
            </div>
            <button
              aria-label="Cerrar chat de WhatsApp"
              className="text-white/90 hover:text-white"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="px-4 py-3 text-sm text-zinc-700">
            ¿Tienes preguntas? Escríbenos por WhatsApp y te respondemos al instante.
          </div>
          <div className="px-4 pb-4">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-white font-medium shadow-md"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon className="h-6 w-6" />
              Abrir WhatsApp
            </a>
          </div>
        </div>
      )}
      <div className="flex items-center justify-end gap-2">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className={cn(
              'hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-2 text-white font-medium shadow-md',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20'
            )}
            style={{ backgroundColor: '#25D366' }}
          >
            <WhatsAppIcon className="h-6 w-6" />
            <span className="text-sm">Escríbenos por WhatsApp</span>
          </button>
        )}
        <button
          aria-label={open ? 'Cerrar WhatsApp' : 'Abrir WhatsApp'}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'relative h-14 w-14 rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
            'flex items-center justify-center text-white'
          )}
          style={{ backgroundColor: '#25D366' }}
        >
          <WhatsAppIcon className="h-9 w-9" />
          <span className="sr-only">WhatsApp</span>
        </button>
      </div>
    </div>
  )
}

export default WhatsAppWidget
