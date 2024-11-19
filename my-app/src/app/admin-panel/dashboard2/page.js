import { routesUrl } from '@/utils/pagesurl'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const DashboardPage2 = () => {
  return (
    <>
    <Typography className='text-center' variant='h4'>This is Dashboard Page 2</Typography>
    <Link className=' text-2xl' href={routesUrl.Dashboard}>
    <u>Click Here</u></Link>
    </>
  )
}

export default DashboardPage2