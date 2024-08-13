import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import SideDrawer from '../Components/SideDrawer/SideDrawer'

const PrivateRoutes = () => {
    return (
        <div className='main_wrapper'>
            <div className='side_drawer'>
                <SideDrawer />
            </div>
            <div className='main_content'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
export default PrivateRoutes