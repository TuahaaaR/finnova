import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";

const page = () => {
    return (
        <div style={{ marginTop: '20px', display: 'flex' }}>
            <div style={{ width: '140px', height: '180px', backgroundColor: 'white', borderRadius: '15px', marginRight: '10px', border: '2px solid #DBE7C9', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ minWidth: '100px', minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#98ABEE', marginBottom: '-15px', marginTop: '15px', borderRadius: '10px' }}>
                    <img src="/users.png" alt="" style={{ width: '70%', height: '70%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ marginBottom: '-10px' }}>Users</h3>
                <p style={{ marginBottom: '-10px' }}>72.8 K</p>
                <p style={{ fontSize: '12px', color: 'gray' }}>+61.5%</p>
            </div>
            <div style={{ width: '140px', height: '180px', backgroundColor: 'white', borderRadius: '15px', marginRight: '10px', border: '2px solid #DBE7C9', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ minWidth: '100px', minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#98ABEE', marginBottom: '-15px', marginTop: '15px', borderRadius: '10px' }}>
                    <img src="/clock.png" alt="" style={{ width: '70%', height: '70%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ marginBottom: '-10px' }}>Sessions</h3>
                <p style={{ marginBottom: '-10px' }}>72.8 K</p>
                <p style={{ fontSize: '12px', color: 'gray' }}>+61.5%</p>
            </div>
            <div style={{ width: '140px', height: '180px', backgroundColor: 'white', borderRadius: '15px', marginRight: '10px', border: '2px solid #DBE7C9', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ minWidth: '100px', minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#98ABEE', marginBottom: '-15px', marginTop: '15px', borderRadius: '10px' }}>
                    <img src="/audio-wave.png" alt="" style={{ width: '70%', height: '70%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ marginBottom: '-10px' }}>Performance</h3>
                <p style={{ marginBottom: '-10px' }}>72.8 K</p>
                <p style={{ fontSize: '12px', color: 'gray' }}>+61.5%</p>
            </div>
            <div style={{ width: '140px', height: '180px', backgroundColor: 'white', borderRadius: '15px', marginRight: '10px', border: '2px solid #DBE7C9', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ minWidth: '100px', minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#98ABEE', marginBottom: '-15px', marginTop: '15px', borderRadius: '10px' }}>
                    <BsGraphUpArrow alt="" style={{ width: '70%', height: '70%', objectFit: 'cover', color: '#007bff' }} />
                </div>
                <h3 style={{ marginBottom: '-10px' }}>Growth</h3>
                <p style={{ marginBottom: '-10px' }}>72.8 K</p>
                <p style={{ fontSize: '12px', color: 'gray' }}>+61.5%</p>
            </div>
        </div>
    )
}

export default page