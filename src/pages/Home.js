import React, {useState} from 'react'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Execises />
    </Box>
  )
}

export default Home