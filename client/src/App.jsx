import React, { Fragment } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Homepage />
        </Fragment>
    );
};

export default App;