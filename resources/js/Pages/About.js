import React, { Component } from "react";
import Example from "../components/Example";

export default class About extends Component {
    render() {
        return (
            <div>
                About Page
                <a href="/">Home</a>
                <Example />
            </div>
        );
    }
}
