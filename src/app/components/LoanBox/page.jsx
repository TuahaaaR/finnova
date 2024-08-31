import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";

const page = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '60px', marginTop: '40px' }}>
            <div>
                <div style={{ width: '120px', height: '120px', backgroundColor: 'white', margin: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <IoHomeOutline style={{ fontSize: '50px' }} />
                    <h6 style={{ marginTop: '5px', marginBottom: '0px' }}>Home Loan</h6>
                </div>
                <div style={{ width: '120px', height: '120px', backgroundColor: 'white', margin: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <GiAutoRepair style={{ fontSize: '50px' }} />
                    <h6 style={{ marginTop: '5px', marginBottom: '0px' }}>Maintenance</h6>
                </div>
            </div>
            <div>
                <div style={{ width: '120px', height: '120px', backgroundColor: 'white', margin: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <IoCarSportOutline style={{ fontSize: '50px' }} />
                    <h6 style={{ marginTop: '5px', marginBottom: '0px' }}>Car Loan</h6>
                </div>
                <div style={{ width: '120px', height: '120px', backgroundColor: 'white', margin: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <MdOutlineRocketLaunch style={{ fontSize: '50px' }} />
                    <h6 style={{ marginTop: '5px', marginBottom: '0px' }}>Boosters</h6>
                </div>
            </div>
        </div>
    )
}

export default page