import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

function CheckList()
{
    return(
        <Grid item xs={4} sx={{
            paddingY:"50px",
          }}>
            <Card sx={{
              height:"100%",
              boxShadow:6
            }}>
              <CardHeader
                title={(
                  <Grid container>
                    <Grid item xs={8}>
                      <Grid container>
                        <Grid item xs={12}>
                          Past Activity
                        </Grid>
                        <Grid item xs={12} sx={{
                          fontSize:"15px",
                          letterSpacing: 4,
                          paddingX:"5px"
                        }}>
                          <Box sx={{
                            visibility : "hidden" 
                          }}>
                            Main metrics
                          </Box>
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
                 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar sx={{
                          color:"green"
                        }}>
                        <Icon sx={{ color: green[500] }}><CheckCircleIcon/></Icon>
                      </ListItemAvatar>
                      <ListItemText primary="Company creation" secondary="Jan 1, 2022" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Icon sx={{ color: green[500] }}><CheckCircleIcon/></Icon>
                      </ListItemAvatar>
                      <ListItemText primary="Loans tokenised" secondary="Feb 1, 2022" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Icon sx={{ color: green[500] }}><CheckCircleIcon/></Icon>
                      </ListItemAvatar>
                      <ListItemText primary="Legal status modified" secondary="March 1, 2022" />
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
              <Divider />
            </Card>
          </Grid>
    );
}

export default CheckList;