import React from "react";
import App from "../App";
import Header from "../components/header/header";


class SamplePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App/>
                <Header title="SamplePage"/>
            </React.Fragment>
        );
    }
}

export default SamplePage;