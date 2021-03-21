import React from 'react';
//import picture from 'storage';

export default function Intro({ title, children }) {
    return (
        <section className="blurb">
            <div className="container">
                <div>
                    <img src="" alt="PhucNguyen" className="avatar" />
                </div>
                <div>
                    <h3>{title}</h3>
                    {children}
                </div>
            </div>
        </section>
    )
}
