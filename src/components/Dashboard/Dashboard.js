import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useRechart from '../../hooks/useRechart';
import './Dashboard.css';

const Dashboard = () => {
    const [chart, setChart] = useRechart();
    const { month } = chart;


    return (
        <div>
            <div className='container dashboard-rechart-first-two'>
                <div className='month-wise'>
                    <h1>MONTH WISE SELL</h1>
                    <LineChart width={500} height={400} data={chart}>
                        <Line type="monotone" dataKey='sell' stroke="#8884d8" strokeWidth={2} />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div>
                    <h1>Investment VS Revenue</h1>
                    <AreaChart
                        width={500}
                        height={400}
                        data={chart}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="green" />
                    </AreaChart>
                </div>
            </div>

            <div className='container dashboard-rechart-first-two'>
                <div>
                    <h1>Investment VS Revenue</h1>
                    <BarChart width={500} height={400} data={chart}>
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="red" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                    <div className='barchart'>
                        <p className='barchart-revenue-color'>Revenue</p>
                        <p className='barchart-investment-color'>Investment</p>
                    </div>
                </div>
                <div>
                    <h1>Investment VS Revenue</h1>
                    <PieChart width={500} height={400}>
                        <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;