import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <Button></Button>
     <Input></Input>
    </div>
  )
}
