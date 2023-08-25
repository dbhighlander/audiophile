import React, { Fragment } from "react";
import HeaderContainer from "../../containers/header/header-container";
import './not-found.css'


const NotFound = () => {

    return (
        <Fragment>
        <HeaderContainer />
        <main>
            <h1 className="error__title">404 - Whoops we've lost our bearings!</h1>
        </main>
        </Fragment>
    )
}

export default NotFound