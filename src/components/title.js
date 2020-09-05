import React from "react";


class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    onClick() {
        this.setState((state, props) => {
            return {
                value: state.value + " X"
            };
        });
    }

    render() {
        return (
            <div id="title" onClick={() => this.onClick()}>
                <p>
                    {this.state.value}
                </p>
            </div>
        );
    }
}

export default Title;
