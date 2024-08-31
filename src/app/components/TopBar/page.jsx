import React from 'react';
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { CiGift } from "react-icons/ci";

const topbar = () => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', alignItems: 'center', marginTop: '10px' }}>
            <FaRegBell style={{ fontSize: '28px', color: 'black', cursor: 'pointer', marginRight: '10px' }} />
            <div style={{ width: '170px', height: '40px', backgroundColor: '#9F70FD', borderRadius: '10px', marginRight: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <CiGift style={{ fontSize: '28px', color: 'black', cursor: 'pointer', marginRight: '10px' }} />
                <p style={{cursor:'pointer'}}>2 New Updates</p>
            </div>
            <FaRegUser style={{ fontSize: '28px', color: 'black', cursor: 'pointer', marginRight: '10px' }} />
        </div>
    )
}

export default topbar