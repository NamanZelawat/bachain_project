import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function Header()
{
    return (
        <Grid container>
          <Grid item xs={11}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" component="h3">
                  BAChain
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    letterSpacing: 6,
                  }}
                >
                  Transparency
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} >
            <Grid 
              container
              style={{
                height:"100%",
              }}
            >
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={2}>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar sx={{ height:"20px", width:"20px" }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                  </Grid>
                  <Grid item xs={10} sx={{ paddingX: 1 }}>
                    Username
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
}

export default Header;