import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
    return `${value} ${"Kg"}`;
  }

export default function Weight({articles}) {
    const [minMax, setMinMax] = useState([]);

    useEffect(() => {
        if(articles === "Ovin Engraissement") {
            setMinMax([18,40]);
        }
        else if(articles === "Poulaier Engraissement") {
            setMinMax([1,4]);
        }
        else {
            setMinMax([1,3]);
        }
    }, [articles])

    const [value, setValue] = useState([0, 2000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
        return `${value} ${"Kg"}`;
      }

    return (
        <div className="card">
            <div className="card-heading">
                <a data-toggle="collapse" data-target="#collapseThree">Poids</a>
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
                            defaultValue={minMax}
                            marks={marks}
                        />
                    </Box>
                </div>
            </div>
        </div>
    )
}