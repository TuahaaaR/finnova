import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";

const page = () => {
    return (
        <div style={{ marginLeft: '30px', marginTop: '-280px' }}>
            <h2>Recent Activity</h2>
            <div style={{ display: 'flex', marginTop: '-20px', marginBottom: '45px' }}>
                <h4 style={{ marginRight: '25px', width: '50%' }}>History</h4>
                <h4 style={{ width: '50%' }}>Upcoming</h4>
            </div>
            <div style={{ marginTop: '-55px', marginBottom: '60px', display: 'flex', justifyContent: 'space-between', width: '250px' }}>
                <CiSettings style={{ fontSize: '25px' }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button style={{ marginRight: '10px' }}>Add Activity</button>
                    <IoAddCircleOutline style={{ fontSize: '25px' }} />
                </div>
            </div>
            <div>
                <div style={{ height: '100px', width: '320px', margin: '0px', marginTop: '-60px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '-60px' }}>
                        <CiCreditCard1 style={{ color: 'green', fontSize: '25px' }} />
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>Shopify Payment</p>
                            <p style={{ fontSize: '8px', color: 'gray', marginTop: '-8px' }}>Date: 14 February 2024</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '60px' }}>$1500</p>
                    </div>
                </div>
                <div style={{ height: '100px', width: '320px', margin: '0px', marginTop: '-60px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '-60px' }}>
                        <CiCreditCard1 style={{ color: 'green', fontSize: '25px' }} />
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>Shopify Payment</p>
                            <p style={{ fontSize: '8px', color: 'gray', marginTop: '-8px' }}>Date: 14 February 2024</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '60px' }}>$1500</p>
                    </div>
                </div>
                <div style={{ height: '100px', width: '320px', margin: '0px', marginTop: '-60px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '-60px' }}>
                        <CiCreditCard1 style={{ color: 'red', fontSize: '25px' }} />
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>Shopify Payment</p>
                            <p style={{ fontSize: '8px', color: 'gray', marginTop: '-8px' }}>Date: 14 February 2024</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '60px' }}>$1500</p>
                    </div>
                </div>
                <div style={{ height: '100px', width: '320px', margin: '0px', marginTop: '-60px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '-60px' }}>
                        <CiCreditCard1 style={{ color: 'red', fontSize: '25px' }} />
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>Shopify Payment</p>
                            <p style={{ fontSize: '8px', color: 'gray', marginTop: '-8px' }}>Date: 14 February 2024</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '60px' }}>$1500</p>
                    </div>
                </div>
                <div style={{ height: '100px', width: '320px', margin: '0px', marginTop: '-60px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '-60px' }}>
                        <CiCreditCard1 style={{ color: 'green', fontSize: '25px' }} />
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ fontSize: '10px', fontWeight: 'bold' }}>Shopify Payment</p>
                            <p style={{ fontSize: '8px', color: 'gray', marginTop: '-8px' }}>Date: 14 February 2024</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '60px' }}>$1500</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page