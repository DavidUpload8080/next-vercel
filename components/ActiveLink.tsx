import { CSSProperties, FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface IMyProps {
  href: string
  text: string
}
export const ActiveLink: FC<IMyProps> = ({ text, href }) => {
  const { asPath } = useRouter()
  return (
    <Link href={href} passHref legacyBehavior>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
