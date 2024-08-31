import React from 'react';

const Page = () => {
    const percentage = 80;

    const calculateStrokeProps = (radius, percentage) => {
        const circumference = 2 * Math.PI * radius;
        const dashArray = circumference;
        const dashOffset = circumference - (percentage / 100) * circumference;
        return { dashArray, dashOffset };
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-20px' }}>
                <h1>Sessions</h1>
                <p>Year</p>
            </div>
            <div style={{ backgroundColor: 'white', width: '400px', height: '250px', borderRadius: '15px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#ddd" strokeWidth="10" />
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#FE7A36" strokeWidth="10" strokeDasharray={`${calculateStrokeProps(90, percentage).dashArray}`} strokeDashoffset={`${calculateStrokeProps(90, percentage).dashOffset}`} strokeLinecap="round" />

                    <circle cx="100" cy="100" r="70" fill="none" stroke="#ddd" strokeWidth="10" />
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#007bff" strokeWidth="10" strokeDasharray={`${calculateStrokeProps(70, percentage).dashArray}`} strokeDashoffset={`${calculateStrokeProps(70, percentage).dashOffset}`} strokeLinecap="round" />

                    <circle cx="100" cy="100" r="50" fill="none" stroke="#ddd" strokeWidth="10" />
                    <circle cx="100" cy="100" r="50" fill="none" stroke="#D04848" strokeWidth="10" strokeDasharray={`${calculateStrokeProps(50, percentage).dashArray}`} strokeDashoffset={`${calculateStrokeProps(50, percentage).dashOffset}`} strokeLinecap="round" />
                </svg>
                <div style={{ marginRight: '20px' }}>
                    <h5 style={{ color: '#FE7A36' }}>Income</h5>
                    <h5 style={{ color: '#007bff' }}>Expenses</h5>
                    <h5 style={{ color: '#D04848' }}>Savings</h5>
                </div>
            </div>
        </div>
    );
};

export default Page;
