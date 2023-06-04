import React from "react";
import { Typography, Grid, Box, CardMedia, CardContent, Card, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const BatteryLayout = ({
    batterys,
    updateData,
    totalPrice,
    totalLandSize,
    totalEnergy,
    industrialBatteries
}) => {
    const [open, setOpen] = React.useState(true);
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }}>
                Battery Layout
            </Typography>
            < Grid container spacing={2} sx={{ mb: 3 }}>
                {batterys.map((item, index) => {
                    totalPrice += item.count * item.cost;
                    totalLandSize += item.count * parseInt(item.dimension.split('FT')[0]);
                    totalEnergy += item.count * item.energy;
                    industrialBatteries = industrialBatteries + item.count;
                    return (
                        < Grid item xs={4} key={index} >
                            <Card sx={{ display: "flex" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography
                                            variant="body1"
                                            color="black"
                                            component="div"
                                        >
                                            Name: {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Dimension: {item.dimension}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Energy: {item.energy}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Cost: ${item.cost}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            ReleaseDate: {item.releaseDate}
                                        </Typography>
                                        <Box>
                                            <Button variant="text"
                                                onClick={() => {
                                                    if (item.count > 0) {
                                                        const increment = parseInt(item.count) - 1
                                                        updateData(item.id, increment);
                                                    }
                                                }}
                                            >
                                                <RemoveIcon />
                                            </Button>
                                            {item.count}
                                            <Button variant="text"
                                                onClick={() => {
                                                    const decrement = parseInt(item.count) + 1
                                                    updateData(item.id, decrement);
                                                }}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={item.image}
                                    alt="Megapack 2XL"
                                />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid >
            <Box>
                <Typography variant="body1" color="black" component="div">
                    Total Price: ${totalPrice}
                </Typography>
                <Typography variant="body1" color="black" component="div">
                    Total Land Size: {totalLandSize}FT
                </Typography>
                <Typography variant="body1" color="black" component="div">
                    Total Energy: {totalEnergy}MWh
                </Typography>
            </Box>
            {totalLandSize > 100 &&
                <Alert severity="warning" sx={{ position: "fixed", top: 0 }}>site layouts should not exceed 100ft in width</Alert>
            }
            {industrialBatteries >= 4 &&
                <Dialog
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            As you bought four Industrial batteries, One transformer is needed
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)} autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>}
        </>
    );
};

export default BatteryLayout;