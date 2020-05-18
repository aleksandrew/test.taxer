import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './main';
// import ROUTES from '../constants/routes';
import { Container, GridList, GridListTile, GridListTileBar, IconButton, ListSubheader } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Redirect, Route, Switch } from 'react-router';
import { ROUTES } from '../constants/routes';
import { selector } from '../reducers/app';
import { TYPES } from '../constants/types';
import Loader from '../components/Loader';

export default function App() {

    const { data } = useSelector(selector);
    const dispatch = useDispatch();
    const toggleFilterAction = useCallback(() => dispatch({ type: TYPES.GET_DATA }), [dispatch]);

    useEffect((): any => {
        if (data.length === 0) {
            toggleFilterAction();
        }
    }, [data]);

    return (
        <>
            {data.length === 0
                ? <Loader/>
                : <Switch>
                    <Route path={ROUTES.MAIN} component={Main}/>
                    <Redirect exact from='/' to={ROUTES.MAIN}/>
                </Switch>
            }
        </>
    );
}
