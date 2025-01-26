import React from 'react'
import Typography from '../custom/Typography'
import { cn } from '@/lib/utils'

const Heading = ({children,className,p}) => {
  return (
    <div className='text-center pb-2 md:pb-5 lg:pb-8 flex justify-center items-center flex-col'>
        <Typography variant='h2' className={cn("",className)}>
            {children}
        </Typography>
        {
        p && 
        <div className=' md:w-[90%] lg:w-[70%] mt-[-5px]'>
           <Typography variant='p' className="text-grey">
              {p}
           </Typography>
        </div>
        }
    </div>
  )
}

export default Heading