import { ReactNode } from 'react'
import { FC } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'

type Props = {
  children?: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
