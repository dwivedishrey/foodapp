import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,
      textAlign:"center",
      p:2,
      "& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:"2rem",
      },
      "& p":{
        textAlign:"justify",

      },
      "@media (max-width:600px)":{
        mt:0,
      }
    
      }}>
        <Typography variant='h4'>
          Welcome to my Restaurant
        </Typography>
     
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod at accusantium animi qui quas molestiae in, similique corporis placeat iusto eum soluta odit corrupti pariatur enim maiores officia? Assumenda voluptatum fugit suscipit earum quae saepe et ex in unde sed doloremque quisquam at distinctio, ducimus est! Animi facilis voluptatem iure deserunt itaque voluptas quo, molestias minus veritatis vero nesciunt consequatur, eaque commodi. Amet laudantium neque vero iste sit, incidunt dolore beatae eum rerum dolores, sint optio eveniet expedita cupiditate magnam, saepe tempore recusandae reiciendis sequi libero sapiente! Officia explicabo nisi quia, modi alias dolore animi nulla ea possimus, fugit ullam.
      </p>
      <br/>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus blanditiis esse excepturi repellat eum quae quaerat eius dolores quibusdam enim fugiat, suscipit quas voluptates amet rem. Quibusdam ipsum porro ducimus voluptas inventore omnis excepturi? Dolorum ab, fugit possimus minima quibusdam alias animi nesciunt enim mollitia, sequi dolores quam harum obcaecati facilis ullam totam doloribus reiciendis velit provident explicabo architecto! Voluptatum cum velit sequi sint aspernatur obcaecati ea ratione, aut eum quas recusandae facere, molestiae odit. Libero magnam, officiis atque ipsum ex ut nemo molestias debitis cupiditate obcaecati odit non quod maxime fuga dignissimos ad commodi eos omnis quibusdam. Aut?
      </p>
      </Box>
    </Layout>
  )
}

export default About
