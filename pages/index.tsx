import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Counter from '@/components/counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          <Counter/>
    </>
  )
}
