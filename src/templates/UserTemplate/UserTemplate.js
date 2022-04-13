import { Fragment } from "react";
import { Route } from "react-router-dom"

export const UserTemplate = (props) => {

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <div style={{backgroundColor:'rgb(76 76 76)',width:'100vw',height:'100vh'}} className="relative">
                <Component {...propsRoute} />
            </div>
        </Fragment>
    }} />
}