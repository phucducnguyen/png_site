import React, { useMemo } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { getSimplifiedPosts } from '../utils/helpers';

import Intro from './Intro';
import Projects from './Projects';
import Posts from './Posts';
import TypedWords from './TypedWords';

import projects from '../data/projects';


export default function Home() {


    const Section = ({ title, children, button, ...props }) => (
        <section {...props}>
            <h2 className="section-title">
                {title}
                {button && (
                    <Router>
                        <Link className="section-button" to="/blog">
                            View all
                        </Link>
                    </Router>
                )}
            </h2>
            {children}
        </section>
    )

    return (
        <>
            <Intro title="Hi, I'm Phuc Nguyen.">
                <TypedWords strings={[
                    "I'm an electrical engineer ⚙️️&#10;&#9;a self-taught developer 💻&#10;&#9;also a DIY-er 💡"
                ]}
                    loop={false}
                />
            </Intro>
            <div className="container index">
                <Section title="Projects" button>
                    <Projects data={projects} />
                </Section>
            </div>
        </>
    );
}

{/* 
    export default function Home({ data }) {
    const latest = data.latest.edges
    const popular = data.popular.edges
    const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest)[latest])
    const simplifliedPopular = useMemo(() => getSimplifiedPosts(popular), [popular,])
*/}