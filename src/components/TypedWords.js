import React from 'react';
import Typed from 'typed.js';

export default class TypedWords extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        //const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        var options = {
            strings: this.props.strings,
            typeSpeed: 40,
            backSpeed: 40,
            loop: this.props.loop,
            startDelay: this.props.startDelay,
            backDelay: this.props.backDelay,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }
    render() {
        return (
            <span style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}>
                {this.typed}
            </span >
        );
    }
}