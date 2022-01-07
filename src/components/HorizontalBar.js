import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { Bar } from 'react-chartjs-2';
import { theme } from '../theme';

const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27],
        label: "NUmber of shares",
        maxBarThickness: 10
      }
    ],
    labels: ['Shareholder A', 'Shareholder B', 'Shareholder C', 'Shareholder D']
  };

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    plugins: {
      legend: {
        display : false,
      },
    },
    scales: {
      xAxis : {
        position: 'top', // `axis` is determined by the position as `'y'`
      }
    },
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'y',
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

function HorizontalBar()
{
    return(
        <Grid item xs={8} sx={{
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
                          Your company information
                        </Grid>
                        <Grid item xs={12} sx={{
                          fontSize:"15px",
                          letterSpacing: 4,
                          paddingX:"5px"
                        }}>
                          Main metrics
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={2} sx={{
                      fontSize:"15px",
                      textAlign : "center"
                    }}>
                      <Grid container>
                        <Grid item xs={12}>
                          Total Shares
                        </Grid>
                        <Grid item xs={12} sx={{
                          color : "blue",
                          paddingTop : "5px"
                        }}>
                          3660
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={2} sx={{
                      fontSize:"15px",
                      textAlign : "center"
                    }}>
                      <Grid container>
                        <Grid item xs={12}>
                          Total Value
                        </Grid>
                        <Grid item xs={12} sx={{
                          color : "blue",
                          paddingTop : "5px"
                        }}>
                          $3660
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
    );
}

export default HorizontalBar;