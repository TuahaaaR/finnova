import Sidebar from '../../components/SideBar/page';
import TopBar from '../../components/TopBar/page';
import Performance from '../../components/Performance/page';
import Sessions from '../../components/Sessions/page';
import Stats from '../../components/Stats/page';
import SessionsByDevice from '../../components/SessionsByDevice/page';
import LoanBox from '../../components/LoanBox/page'
import RecentActivity from "../../components/RecentActivity/page"
import DailyOverview from '../../components/DailyOverview/page'
import TopInvestments from '../../components/TopInvestments/page'
import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ width: '100%' }}>
                <TopBar />
                <div style={{ marginLeft: '50px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '100%', display: "flex", justifyContent: 'left', }}>
                        <Performance />
                        <Sessions />
                        <LoanBox />
                    </div>
                    <div style={{ width: '100%', height: '100%', display: "flex", justifyContent: 'left', }}>
                        <Stats />
                        <SessionsByDevice />
                    </div>
                    <div style={{ width: '100%', height: '100%', display: "flex", justifyContent: 'left', }}>
                        <DailyOverview />
                        <TopInvestments />
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
