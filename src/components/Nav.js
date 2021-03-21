import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import circuit from '../icon/circuit.png';

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="flex">
                    <div>
                        <Router>
                            <Link to="/" className="brand">
                                <span className="emoji">
                                    <img src={circuit} alt="Circuit Board" />
                                </span>{' '}
                                Phuc (Patric) Nguyen
                            </Link>
                        </Router>
                    </div>
                    <div className="flex">
                        <Router>
                            <Link to="/blog">Projects</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/about">About</Link>
                        </Router>
                        <button id="dark-mode-button"
                            onClick={(event) => {
                                const theme = typeof window !== 'undefined'
                                    && localStorage.getItem('theme')

                                if (theme === 'dark') {
                                    typeof window !== 'undefined' && localStorage.removeItem('theme')
                                    const link = document.querySelectorAll('#dark-mode')

                                    if (link) {
                                        link.forEach((el) => el.remove())
                                        event.target.textContent = '🌌'
                                    }
                                } else {
                                    typeof window !== 'undefined' && localStorage.setItem('theme', 'dark')
                                    event.target.textContent = '☀️'

                                    const head = document.getElementsByTagName('head')[0]
                                    console.log(head)
                                    const link = document.createElement('link')
                                    link.rel = 'stylesheet'
                                    link.id = 'dark-mode'
                                    link.href = 'dark.css'

                                    head.appendChild(link)
                                }
                            }}
                        >
                            {typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
                                ? '☀️'
                                : '🌌'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}