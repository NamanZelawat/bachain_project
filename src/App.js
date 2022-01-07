import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Chart as ChartJS } from 'chart.js/auto'
import './App.css';

import Header from "./components/Header";
import HorizontalBar from "./components/HorizontalBar";
import CheckList from "./components/CheckList";
import VerticalBar from "./components/VerticalBar";


function App() 
{
  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: 'white',
          padding:"10px",
          marginX:"20px"
        }}
      >
        <Header />
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{
          margin:"10px",
          padding : "20px"
        }}>
          <Grid container>
            <HorizontalBar />
            <CheckList />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{
          margin:"10px",
          padding : "20px"
        }}>
          <VerticalBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
