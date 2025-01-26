import React from 'react'
import Typography from '../custom/Typography'
import { cn } from '@/lib/utils'

const Heading = ({children,className}) => {
  return (
    <div className='text-center pb-2 md:pb-5 lg:pb-8'>
        <Typography variant='h2' className={cn("",className)}>
            {children}
            
        </Typography>
    </div>
  )
}

export default Heading