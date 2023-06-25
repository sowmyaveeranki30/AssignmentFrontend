import React from 'react';
import { Box, Typography } from '@mui/material';

const ElementMapper = ({ item }) => {
    const elements = [];
    for (let i = 0; i < item.count; i++) {
        elements.push(item.count > 0 && item.deviceName === "megapack2XL" && < Box sx={{ background: "gray", width: "300px", height: "50px", m: 1 }} key={i}></Box >);
        elements.push(item.count > 0 && item.deviceName === "megapack2" && < Box sx={{ background: "gray", width: "220px", height: "50px", m: 1 }} key={i}></Box>);
        elements.push(item.count > 0 && item.deviceName === "megapack" && < Box sx={{ background: "gray", width: "220px", height: "50px", m: 1 }} key={i}></Box>);
        elements.push(item.count > 0 && item.deviceName === "powerpack" && < Box sx={{ background: "gray", width: "110px", height: "50px", m: 1 }} key={i}></Box>);
        elements.push(item.count > 0 && item.deviceName === "transformer" && < Box sx={{ background: "gray", width: "110px", height: "50px", m: 1 }} key={i}></Box>);
    }
    return < Box sx={{ display: "flex" }}>{elements}</Box>
};

const SiteLayout = ({ batterys }) => {
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 3, mt: 3 }}>
                Site Layout
            </Typography>
            < Box sx={{ mb: 3, border: "2px solid gray", display: "flex", flexWrap: "wrap", p: 1 }}>
                {batterys.map((item, index) => (
                    (
                        <Box key={index}>
                            <ElementMapper item={item} />
                        </Box>
                    )))
                }
            </Box >
        </>
    )
}

export default SiteLayout;