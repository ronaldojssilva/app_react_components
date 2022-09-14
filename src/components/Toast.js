import React, { Component } from "react";

export default class Toast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: false });
        }, this.props.delay)
    }

    render() {
        const { message } = this.props;
        console.log(this.state);
        return (
            <div className={this.props.color}>
                {this.state.visible ? <h4>{message}</h4> : <span />}
            </div>
        );
    }
}