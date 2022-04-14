import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Paper } from '@mui/material';

import { PAGE_CREATE_THING } from '../../common/paths';

import "./index.css";
const SpeedDial: FC = () => {
    return (
        <div className="SpeedDial">
            <Link to={PAGE_CREATE_THING}>
                <Paper className="SpeedDial__icon">
                    <AddIcon fontSize="large" />
                </Paper>
            </Link>
        </div>
    );
}

export default SpeedDial;
