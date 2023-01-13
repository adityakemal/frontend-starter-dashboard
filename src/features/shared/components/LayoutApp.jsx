import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function LayoutApp({ children, title }) {
    return (
        <div className='layout'>
            <div>
                <Navbar />
                <div className='container-fluid h-100'>
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}


