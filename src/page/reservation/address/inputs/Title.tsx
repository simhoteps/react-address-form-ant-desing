import { Typography } from '@mui/material'
import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <Typography variant="subtitle2">
        {title}
    </Typography>
  )
}

export default Title
