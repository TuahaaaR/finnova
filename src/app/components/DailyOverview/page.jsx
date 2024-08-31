import React from 'react';

const Page = () => {
  const percentage = 60; // Set your desired percentage value
  const radius = 30; // Set the radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ marginTop: '-65px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3>Daily Overview</h3>
        <button>Export</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '290px', height: '100px', backgroundColor: 'white', marginTop: '-20px', marginRight: '20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ margin: '0px' }}>232</h1>
            <h5 style={{ marginTop: '5px', marginBottom: '0px', color: 'gray' }}>Today</h5>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 20px' }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#ddd" strokeWidth="10" />
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#007bff" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: '12px' }}>Spend</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ margin: '0px' }}>150</h1>
            <h5 style={{ marginTop: '5px', marginBottom: '0px', color: 'gray' }}>Expected</h5>
          </div>
        </div>
        <div style={{ width: "290px", height: '100px', backgroundColor: 'white', marginTop: '-20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ margin: '0px' }}>232</h1>
            <h5 style={{ marginTop: '5px', marginBottom: '0px', color: 'gray' }}>Today</h5>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 20px' }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#ddd" strokeWidth="10" />
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#007bff" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: '12px' }}>Goal</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ margin: '0px' }}>150</h1>
            <h5 style={{ marginTop: '5px', marginBottom: '0px', color: 'gray' }}>Expected</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
