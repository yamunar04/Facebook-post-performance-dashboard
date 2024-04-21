import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import './MainLayout.css';
import Graph from '../Graph/Graph';
import GenerateGraph from '../GenerateGraph/GenerateData';

const MainLayout = () => {
    return (
        <>
            <div className='layout-heading'>
                <h3>Facebook Post Performance Dashboard</h3>
                <div className='layout-route'>
                <ul className='nav-links'>
                    <li className='link-item'>
                        <NavLink className='nav-links' to='/'>
                            All Graphs
                        </NavLink>
                    </li>
                    <li className='link-item'>
                        <NavLink className='nav-links' to='/form'>
                            Generate Data
                        </NavLink>
                    </li>
                </ul>
                </div>        
                
            </div>
            
            <div className="site-layout-content">
                <Routes>
                    <Route path="/" element={<Graph />} />
                    <Route path="/form" element={<GenerateGraph />} />
                </Routes>

            </div>
        </>
    );
};

export default MainLayout;
