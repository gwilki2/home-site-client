import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer'
import NavBar from '../NavBar'
import ContactPage from '../ContactPage'
import HomePage from '../HomePage'
import cssModules from './index.module.scss'


const Layout = () => {
    return (
        <div className={cssModules.layout}>
            <nav className={cssModules.nav}><NavBar /> </nav>
            <main className={cssModules.pages}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <footer className={cssModules.footer}><Footer /></footer>
        </div>
    )
}

export default Layout