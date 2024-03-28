import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string

  [propName: string]: ReactNode | string | undefined

  addPaddingTop?: boolean
}

const Container = ({
  children,
  className = '',
  addPaddingTop = false,
  ...others
}: ContainerProps) => {
  const classes = addPaddingTop
    ? `${className} mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8`
    : className
  return (
    <div className={`mb-10 mt-20 p-8 lg:mt-0 ${classes} `} {...others}>
      {children}
    </div>
  )
}

export default Container
