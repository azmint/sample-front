import React from "react";
import Header from "../../header";
import TaskCardGrid from "./taskCardGrid";


export default function TopPage() {
    return (
        <React.Fragment>
            <Header value="SampleFront"/>
            <main>
                <TaskCardGrid />
            </main>
        </React.Fragment>
    );
}
