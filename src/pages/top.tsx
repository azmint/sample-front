import React from "react";
import App from "../App";
import Header from "../components/header/header";


class TopPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App/>
                <Header title="TopPage"/>
            </React.Fragment>
        );
    }
}

export default TopPage;