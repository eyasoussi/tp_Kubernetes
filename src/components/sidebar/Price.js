import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
    return `${value} ${"DT"}`;
  }

export default function Price({articles, setPrice}) {
    const [minMax, setMinMax] = useState([0,2000]);
    
    useEffect(() => {
        if(articles === "Ovin Engraissement") {
            setMinMax([700,1750]);
        }
        else if(articles === "Ovin B") {
            setMinMax([400,650]);
        }
        else if(articles === "Poulaier Engraissement") {
            setMinMax([7,14]);
        }
        else {
            setMinMax([1,3]);
        }
    }, [articles])

    const [value, setValue] = useState([0,1750]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPrice(value);
    };
    
const marks = [
  {
    value: minMax[0],
    label: valuetext(minMax[0]),
  },
  {
    value: minMax[1],
    label: valuetext(minMax[1]),
  },
];

    function valueLabelFormat(value) {      
        return `${value} ${"DT"}`;
      }

    return (
        <div className="card">
            <div className="card-heading">
                <a data-toggle="collapse" data-target="#collapseThree">Prix</a>
            </div>
            <div>
                <div>
                    <Box ml="5" pl="10">
                        <Slider
                            min={minMax[0]}
                            max={minMax[1]}
                            getAriaLabel={() => 'Prix range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            valueLabelFormat={valueLabelFormat}
                            defaultValue={minMax[1]}
                            marks={marks}
                        />
                    </Box>
                </div>
            </div>
        </div>
    )
}