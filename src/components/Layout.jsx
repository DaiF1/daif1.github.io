import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <ContactForm />
        </>
    )
}

export default Layout;