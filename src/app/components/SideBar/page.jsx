"use client";
import React, { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { IoMdHome, IoIosMail, IoIosChatboxes } from "react-icons/io";
import { FaFile, FaDatabase, FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GoGoal } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";

const Sidebar = () => {
    const [isCrossIconVisible, setCrossIconVisible] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState('home');

    const handleBarsClick = () => {
        setCrossIconVisible(!isCrossIconVisible);
    };

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    const getIconStyle = (iconName) => {
        return {
            fontSize: '28px',
            color: selectedIcon === iconName ? 'purple' : 'gray',
            cursor: 'pointer',
            marginTop: '35px',
            border: selectedIcon === iconName ? '2px solid purple' : 'none',
            borderRadius: '50%',
            padding: '5px',
            transition: 'all 0.3s ease-in-out',
        };
    };

    const sidebarProfileStyle = {
        position: 'absolute',
        top: '0',
        left: isCrossIconVisible ? '0' : '-300px', // Initially off-screen
        width: '300px',
        height: '100%',
        backgroundColor: 'white',
        zIndex: '10',
        transition: 'left 0.3s ease-in-out', // Transition property added
    };

    return (
        <div style={{ position: 'relative', width: '80px', minWidth: '80px', height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', marginTop: '50px' }} onClick={handleBarsClick}>
                <HiBars3 style={{ fontSize: '35px', color: 'black', cursor: 'pointer' }} />
            </div>

            <div id="sidebarContent" style={{ position: 'relative', marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IoMdHome style={getIconStyle('home')} onClick={() => handleIconClick('home')} />
                <FaFile style={getIconStyle('file')} onClick={() => handleIconClick('file')} />
                <FaDatabase style={getIconStyle('database')} onClick={() => handleIconClick('database')} />
                <IoIosMail style={getIconStyle('mail')} onClick={() => handleIconClick('mail')} />
                <IoIosChatboxes style={getIconStyle('chat')} onClick={() => handleIconClick('chat')} />
                <FaShoppingCart style={getIconStyle('cart')} onClick={() => handleIconClick('cart')} />
            </div>

            <div id="sideBarProfile" style={sidebarProfileStyle}>
                <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={handleBarsClick}>
                    <RxCross2 style={{ fontSize: '35px', color: 'black', cursor: 'pointer' }} />
                </div>
                <div style={{ height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FaRegUserCircle style={{ fontSize: '50px' }} />
                    <div>
                        <h1 style={{ marginBottom: '3px' }}>UserName</h1>
                        <p style={{ color: 'gray', marginTop: '0px' }}>Joined 3 Months Ago</p>
                    </div>
                </div>
                <div style={{ marginTop: '-30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <div style={{ width: '70%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#98ABEE', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
                                <GoGoal style={{ fontSize: '30px' }} />
                            </div>
                            <p style={{ marginLeft: '15px', fontSize: '20px' }}>Goals</p>
                        </div>
                        <IoIosArrowForward style={{ fontSize: '40px', justifyContent: 'flex-end' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <div style={{ width: '70%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#98ABEE', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
                                <MdOutlineCalendarMonth style={{ fontSize: '30px' }} />
                            </div>
                            <p style={{ marginLeft: '15px', fontSize: '20px' }}>Monthly Plan</p>
                        </div>
                        <IoIosArrowForward style={{ fontSize: '40px', justifyContent: 'flex-end' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <div style={{ width: '70%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#98ABEE', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
                                <IoSettingsOutline style={{ fontSize: '30px' }} />
                            </div>
                            <p style={{ marginLeft: '15px', fontSize: '20px' }}>Settings</p>
                        </div>
                        <IoIosArrowForward style={{ fontSize: '40px', justifyContent: 'flex-end' }} />
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ width: '100%', marginLeft: '15px', }}>Daily Overview</h2>
                    <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around', marginTop: '-20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#98ABEE', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
                                    <IoSettingsOutline style={{ fontSize: '30px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '70%' }}>
                                <p style={{ color: 'gray' }}>Harvested Loss</p>
                                <p style={{ marginTop: '-10px', width: 'auto', fontSize: '25px' }}>$ 5430</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around', marginTop: '-20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#98ABEE', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
                                    <BsGraphUpArrow style={{ fontSize: '30px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '70%' }}>
                                <p style={{ color: 'gray' }}>Net Worth</p>
                                <p style={{ marginTop: '-10px', width: 'auto', fontSize: '25px' }}>$ 5430</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around', marginTop: '-20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#98ABEE', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }}>
                                    <IoCashOutline style={{ fontSize: '30px' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '70%' }}>
                                <p style={{ color: 'gray' }}>Total Earnings</p>
                                <p style={{ marginTop: '-10px', width: 'auto', fontSize: '25px' }}>$ 5430</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
