import { Fragment } from 'react';
import {Route} from 'react-router-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

export const HomeTemplate = (props) => {
    const {Component, ...restProps} = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute}/>

            <Component {...propsRoute}/>

            <Footer />
        </Fragment>
    }}/>
}