import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={cn("mx-auto w-full max-w-custom-xl px-3  md:px-4 xl:px-5", className)}>{children}</div>
  )
}

export default Container