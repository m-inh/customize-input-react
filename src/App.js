import React, {Component} from 'react';
import MyInput from "./MyInput";

class App extends Component {
    state = {
        text: ""
    };

    _handleTextChange(newText) {
        this.setState({text: newText});
    }

    render() {
        const {text} = this.state;

        return (
            <div>
                <MyInput
                    value={text}
                    onChange={this._handleTextChange.bind(this)}
                />
            </div>
        );
    }
}

export default App;
