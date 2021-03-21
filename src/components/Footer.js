import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import github from '../icon/Github.png';
import linkedIn from '../icon/LI-In-Bug.png';
import gatsby from '../icon/Gatsby_Monogram.png';

export default function Footer() {
    return (
        <footer className="footer flex">
            <section className="container">
                <nav className="footer-links">
                    <Router>
                        <Link to="/blog">Projects</Link>
                        <Link to="/guides">Guides</Link>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            News1
                        </a>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            News2
                        </a>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            News3
                        </a>
                    </Router>
                </nav>
                <nav className="flex justify-center">
                    <a
                        href="https://www.gatsbyjs.org"
                        title="Build with Gatsby"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="img"
                    >
                        <img src={gatsby} className="footer-img" alt="Gatsby" />
                    </a>
                    <a
                        id="github-logo"
                        href="https://www.github.com/pnguyen2101"
                        title="Open-source Github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="img"
                    >
                        <img src={github} className="footer-img" alt="Github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/phuc-nguyen-3bb57816b/"
                        title="Linked-In Profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="img"
                    >
                        <img src={linkedIn} className="footer-img" alt="LinkIn" />
                    </a>
                </nav>
            </section>
        </footer>
    )
}