import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BatteryLayout from './BatteryLayout';
import { Container, Typography, TextField, Grid } from '@mui/material';
import megapack2XL from "./assets/images/megapack2xl.jpeg";
import megapack_2 from "./assets/images/megapack_2.jpeg";
import megapack from "./assets/images/megapack.jpeg";
import power_pack from "./assets/images/power_pack.jpeg";
import transformers from "./assets/images/transformers.jpeg";

const App = () => {
  let totalPrice = 0;
  let totalLandSize = 0;
  let totalEnergy = 0;
  let industrialBatteries = 0;
  const [batterys, setBatterys] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_PATH}/batteries`);
      setBatterys(response.data.data.map((preValue) => {
        return {
          ...preValue,
          image: preValue.deviceName === "megapack2XL" && megapack2XL || preValue.deviceName === "megapack2" && megapack_2 || preValue.deviceName === "megapack" && megapack || preValue.deviceName === "powerpack" && power_pack || preValue.deviceName === "transformer" && transformers
        }
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateData = (id, updatedData) => {
    axios.put(`${process.env.REACT_APP_API_PATH}/updateCount/${id}`, { count: updatedData })
      .then(() => {
        // Handle success
        fetchData();
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 5, color: "red" }}>
        Tesla Industrial Energy Battery Site
      </Typography>
      < Grid container spacing={2} sx={{ mb: 5 }}>
        {batterys.map((item, index) => (
          <Grid item xs={2.4} key={index}>
            <TextField
              id="outlined-basic"
              label={item.name}
              variant="outlined"
              type="number"
              value={item.count}
              onChange={(e) => {
                if (e.target.value < 0) {
                  return;
                }
                const count = parseInt(e.target.value)
                updateData(item.id, count)
              }}
            />
          </Grid>
        ))}
      </Grid >
      <BatteryLayout
        batterys={batterys}
        updateData={updateData}
        totalPrice={totalPrice}
        totalLandSize={totalLandSize}
        totalEnergy={totalEnergy}
        industrialBatteries={industrialBatteries}
      />
    </Container >
  );
};

export default App;