import type { ReactElement } from 'react'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

import type { NextPageWithLayout } from './_app'

const inter = Inter({ subsets: ['latin'] })

const About: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.card}>
        <h1>
          Ir a <Link href="/">Index</Link>
        </h1>
      </div>

      <p className={styles.description}>
        Get started by editing {''}
        <code className={styles.code}>pages/about.js</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}

export default About
