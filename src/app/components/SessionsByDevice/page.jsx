import React from 'react'

const page = () => {

    var percentage = 30;

    const LiquidBar = ({ percentage }) => {
        const containerStyle = {
            width: '200px',
            height: '10px',
            backgroundColor: '#EEEEEE',
            // border: '1px solid black', // Optional border style
            borderRadius: '5px',
            overflow: 'hidden', // Ensure the inner bar doesn't overflow
        };

        const liquidBarStyle = {
            width: `50%`,
            height: '10px',
            backgroundColor: '#007bff', // Set your desired color
            borderRadius: '5px',
        };

        return (
            <div style={containerStyle}>
                <div style={liquidBarStyle}></div>
            </div>
        );
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <div style={{ backgroundColor: 'white', width: '400px', height: '240px', borderRadius: '15px', border: '2px solid #DBE7C9', }}>
                <h4 style={{ fontWeight: 'bold', marginTop: '10px', marginLeft: '10px' }}>Sessions By Device</h4>
                <div style={{ marginLeft: '10px', display: 'flex', marginTop: '-30px' }}>
                    <h5 style={{ width: "20%" }}>Channel</h5>
                    <h5 style={{ width: "60%" }}>Traffic (%)</h5>
                    <h5 style={{ width: "20%" }}>Value</h5>
                </div>
                <div style={{ marginLeft: '10px', display: 'flex', marginTop: '-30px', flexDirection: 'row', alignItems: 'center', width: '400px' }}>
                    <h6 style={{ width: "20%" }}>Direct</h6>
                    <LiquidBar style={{ width: "60%" }} />
                    <h6 style={{ width: "20%", marginLeft: '31px' }}>60.5%</h6>
                </div>
                <div style={{ marginLeft: '10px', display: 'flex', marginTop: '-30px', flexDirection: 'row', alignItems: 'center', width: '400px' }}>
                    <h6 style={{ width: "20%" }}>Direct</h6>
                    <LiquidBar style={{ width: "60%" }} />
                    <h6 style={{ width: "20%", marginLeft: '31px' }}>60.5%</h6>
                </div>
                <div style={{ marginLeft: '10px', display: 'flex', marginTop: '-30px', flexDirection: 'row', alignItems: 'center', width: '400px' }}>
                    <h6 style={{ width: "20%" }}>Direct</h6>
                    <LiquidBar style={{ width: "60%" }} />
                    <h6 style={{ width: "20%", marginLeft: '31px' }}>60.5%</h6>
                </div>
                <div style={{ marginLeft: '10px', display: 'flex', marginTop: '-30px', flexDirection: 'row', alignItems: 'center', width: '400px' }}>
                    <h6 style={{ width: "20%" }}>Direct</h6>
                    <LiquidBar style={{ width: "60%" }} />
                    <h6 style={{ width: "20%", marginLeft: '31px' }}>60.5%</h6>
                </div>
                <div style={{ marginLeft: '10px', display: 'flex', marginTop: '-30px', flexDirection: 'row', alignItems: 'center', width: '400px' }}>
                    <h6 style={{ width: "20%" }}>Direct</h6>
                    <LiquidBar style={{ width: "60%" }} />
                    <h6 style={{ width: "20%", marginLeft: '31px' }}>60.5%</h6>
                </div>
            </div>
        </div>
    )
}

export default page