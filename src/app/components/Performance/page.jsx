import React from 'react';

const Page = () => {
    const data = [
        { x: 0, y: 100 },
        { x: 50, y: 50 },
        { x: 100, y: 75 },
        { x: 200, y: 25 },
        { x: 250, y: 100 },
        { x: 300, y: 75 },
        // Add more data points as needed
    ];

    // Generate the C and S commands dynamically based on the data array
    const pathData = data.reduce(
        (acc, point, index, array) => {
            if (index === 0) {
                return `M${point.x} ${point.y}`;
            } else if (index === 1) {
                return `${acc} C${point.x} ${point.y},`;
            } else if (index === array.length - 1) {
                return `${acc} ${point.x} ${point.y} S${point.x} ${point.y}`;
            } else {
                return `${acc} ${point.x} ${point.y},`;
            }
        },
        ''
    );

    return (
        <div style={{ marginRight: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-20px' }}>
                <h1>Performance</h1>
                <p>Year</p>
            </div>
            <div style={{ backgroundColor: 'white', width: '600px', height: '250px', borderRadius: '15px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 200 100">
                    {/* Draw the curved line */}
                    <path d={pathData} fill="none" stroke="#007bff" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default Page;
