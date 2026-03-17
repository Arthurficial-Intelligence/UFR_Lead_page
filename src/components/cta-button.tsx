import Link from 'next/link'

export function CtaButton({
  href,
  children,
  variant = 'default',
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'inverted'
  className?: string
}) {
  const base = 'inline-block rounded font-subheading text-base tracking-wide transition-colors duration-300 px-10 py-4'
  const variants = {
    default: 'bg-espresso text-desert-sand hover:bg-almond',
    inverted: 'bg-desert-sand text-espresso hover:bg-desert-sand/80',
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
