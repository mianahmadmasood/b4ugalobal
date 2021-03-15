import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                Welcome Home
                <a href="/about">About</a>
                <div class="btcwdgt-chart" bw-cash="true" bw-noshadow="true"></div>

            </div>
        )
    }
}
