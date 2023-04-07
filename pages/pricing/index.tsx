import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from './Pricing.module.css'
import { MainLayout } from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Pricing() {
  return (
    <MainLayout>
      <>
        <div className={styles.card}>
          <h1>
            Ir a <Link href="/">Index</Link>
          </h1>
        </div>

        <p className={styles.description}>
          Get started by editing {''}
          <code className={styles.code}>pages/pricing/pricing.tsx</code>
        </p>
      </>
    </MainLayout>
  )
}
