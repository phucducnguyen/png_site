import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import '../static/style.css'
import '../static/new-moon.css'

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}