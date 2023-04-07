import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '../../styles/Contact.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <MainLayout>
        <div>
          <div className={styles.card}>
            <h1>
              Ir a <Link href="/">Index</Link>
            </h1>
          </div>

          <p className={styles.description}>
            Get started by editing {''}
            <code className={styles.code}>pages/contact.js</code>
          </p>
        </div>
      </MainLayout>
    </>
  )
}
