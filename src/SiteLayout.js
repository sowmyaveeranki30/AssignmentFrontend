import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const SiteLayout = ({ batterys }) => {
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 3, mt: 3 }}>
                Site Layout
            </Typography>
            < Grid container spacing={2} sx={{ mb: 3, border: "2px solid gray" }}>
                {batterys.map((item, index) => (
                    (
                        <Grid item xs={2.4} key={index} sx={{ m: 1 }}>
                            {item.count > 0 && item.deviceName == "megapack2XL" &&
                                < Box sx={{ background: "gray", width: "200px", height: "50px", mt: 1 }}></Box>
                            }
                            {item.count > 0 && item.deviceName == "megapack2" &&
                                < Box sx={{ background: "gray", width: "150px", height: "50px", mt: 1 }}></Box>
                            }
                            {item.count > 0 && item.deviceName == "megapack" &&
                                < Box sx={{ background: "gray", width: "150px", height: "50px", mt: 1 }}></Box>
                            }
                            {item.count > 0 && item.deviceName == "powerpack" &&
                                < Box sx={{ background: "gray", width: "50px", height: "50px", mt: 1 }}></Box>
                            }
                            {item.count > 0 && item.deviceName == "transformer" &&
                                < Box sx={{ background: "gray", width: "50px", height: "50px", mt: 1 }}></Box>
                            }
                        </Grid>
                    )))
                }
            </Grid >
        </>
    )
}

export default SiteLayout;