'use client'

import AOS from 'aos'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import Layout from '@/common/components/layouts'
import { CommandPaletteProvider } from '@/common/context/CommandPaletteContext'
import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts'

const ProgressBar = dynamic(
  () => import('src/common/components/elements/ProgressBar'),
  { ssr: false },
)

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    })
  }, [])

  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      {/*// todo: add defaultseo*/}
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <CommandPaletteProvider>
          <Layout>{children}</Layout>
        </CommandPaletteProvider>
      </ThemeProvider>
    </>
  )
}
