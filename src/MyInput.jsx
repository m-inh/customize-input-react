import React, {Component} from "react";
import propsType from "prop-types";

class MyInput extends Component {

    _handleInputChange(refName) {
        const newValue = this.refs[refName].value;
        this.props.onChange(newValue);
    }

    render() {
        const {value} = this.props;

        return (
            <input
                ref="my-input"
                value={value}
                onChange={() => this._handleInputChange('my-input')}
            />
        )
    }
}

MyInput.propsType = {
    value: propsType.string.isRequired,
    onChange: propsType.func.isRequired,
};

export default MyInput;
