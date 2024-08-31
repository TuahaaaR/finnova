import React from 'react'

const page = () => {
    return (
        <div style={{ width: '400px', height: '75px', backgroundColor: 'white', marginTop: '10px', marginLeft: '15px', padding: '0 10px', borderRadius: '10px' }}>
            <h4 style={{ marginTop: '5px', marginLeft: '5px' }}>Top Investments For Future</h4>
            <div style={{ marginTop: '-20px', display: 'flex', justifyContent: 'space-between', padding: '0 10px', alignItems: 'center' }}>
                <p style={{ fontSize: '10px', color: 'gray', width: '60%', marginLeft: '5px' }}>Please read Investment disclaimer before doing and type if investment</p>
                <button style={{ height: '20px' }}>VIEW</button>
            </div>
        </div>
    )
}

export default page