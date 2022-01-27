import React, { Component } from 'react'

class Name extends Component {
    componentDidMount() {
        document.getElementById("name").classList.add("neon-text");
    }
    render() {
        return (
            <h1 id="name" className={"name"}>Austin Asbury</h1>
        )
    }
}

export default Name