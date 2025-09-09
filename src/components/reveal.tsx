import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction
  delayMs?: number
  as?: keyof JSX.IntrinsicElements
}

export function Reveal({
  children,
  direction = 'up',
  delayMs = 0,
  as = 'div',
  className,
  ...props
}: RevealProps) {
  const Comp: any = as
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Delay reveal for staggered appearance
            const t = setTimeout(() => setShown(true), delayMs)
            obs.disconnect()
            return () => clearTimeout(t)
          }
        })
      },
      { threshold: 0.1 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [delayMs])

  return (
    <Comp
      ref={ref}
      className={cn('reveal', direction, shown && 'in', className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

