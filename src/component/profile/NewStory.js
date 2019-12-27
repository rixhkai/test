import React from 'react'
import { PrimaryAppBar } from './TopBar'
import { Container, TextField } from '@material-ui/core'

export default function NewStory(){
    return(
        <div align="center">
            <div style={{maxWidth:"1080px"}}>
            <PrimaryAppBar/>
            </div>
            <Container maxWidth="md">
        <div style={{marginTop:"50px"}}>      
            <TextField style={{fontSize:"30px"}}
          id="outlined-title-input"
          placeholder="Title"
          fullWidth="true"
          multiline
          variant="outlined"
        />
            <TextField
          id="outlined-story-input"
          placeholder="Tell your story..."
          fullWidth="true"
          multiline
          variant="outlined"
        />
        </div> 
            </Container>
        </div>
    )
}