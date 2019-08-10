import React, { Component } from 'react';

class InputCustumer extends Component {

    render() {
        return (
            <div className="row">
                <label>{this.props.label}</label><br />
                <input id={this.props.id} type={this.props.type} name={this.props.name} />
            </div>
        );
    }
}

export default InputCustumer;