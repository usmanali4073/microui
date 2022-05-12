import React, { Component } from "react"


export default class buttonofbutton extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0};
    }

    

    render() {
        return (
            <div>
                <label>MFE1 Button {this.state.count}</label>
                <button onClick={ ()=>{this.setState({ count: this.state.count + 1 })}  }>Click me To show alert from component one</button>
            </div>
        )
    }
}
