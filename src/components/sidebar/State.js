import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function State({ setStat }) {
    const [quantities, setQuantities] = useState({})
    useEffect(() => {
        setQuantities({
            WeldaQuantity: 12,
            OochraQuantity: 15,
            FerghaQuantity: 13,
        })
    }, []);
    return (
        <div className="card">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div className="card-heading">
                        <Typography variant="h6" display="block" gutterBottom>Etat</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li><a onClick={() => setStat("Welda")}> <Typography variant="subtitle2" >Welda</Typography> ({quantities?.WeldaQuantity})</a></li>
                        <li><a onClick={() => setStat("Oochra")}> <Typography variant="subtitle2" >Oochra</Typography> ({quantities?.OochraQuantity})</a></li>
                        <li><a onClick={() => setStat("Fergha")}> <Typography variant="subtitle2" >Fergha</Typography>({quantities?.FerghaQuantity})</a></li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
