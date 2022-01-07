import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { theme } from '../theme';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';

const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [8],
        label: ["> 5%"],
        maxBarThickness: 10,
        backgroundColor: ["orange"]
      },
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [0,6],
        label: ["> 20%"],
        maxBarThickness: 10,
        backgroundColor: ["blue"]
      },
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [0,0,4],
        label: ["> 10%"],
        maxBarThickness: 10,
        backgroundColor: ["purple"]
      }
    ],
    labels: ['Party A', 'Party B', 'Party C', '', '', '', '', '']
  };
  
  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    plugins: {
      legend: {
        display : true,
        position:"top",
        align:"end"
      },
    },
    scales: {
      x:{
        grace:1,
        // display:false,
      },
      y:{
        grace:2,
        position: 'right',
        // display:false
      },
      xAxis : {
        position: 'right',
        display:false, // `axis` is determined by the position as `'y'`
      },
      yAxis : {
        position: 'top',
        display:false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'x',
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

function VerticalBar()
{
    return(
        <Grid container>
            <Grid item xs={12} sx={{
              paddingY:"50px",
            }}>
              <Card sx={{
                boxShadow : 6,
              }}>
                <CardHeader
                  title={(
                    <Grid container>
                      <Grid item xs={8}>
                        <Grid container>
                          <Grid item xs={12}>
                            Loan Metrics
                          </Grid>
                          <Grid item xs={12} sx={{
                            fontSize:"15px",
                            letterSpacing: 4,
                          }}>
                            Loans owners
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                />
                <Divider />
                <CardContent>
                  <Box
                    sx={{
                      height: 400,
                      position: 'relative'
                    }}
                  >
                    <Bar
                      data={data}
                      options={options}
                    />
                  </Box>
                </CardContent>
                <Divider />
              </Card>
            </Grid>
          </Grid>
    );
}

export default VerticalBar;