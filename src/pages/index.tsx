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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: '100%',
            height: '100%',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    })
);

export default function App() {

    const { data } = useSelector(selector);
    const dispatch = useDispatch();
    const toggleFilterAction = useCallback(() => dispatch({ type: TYPES.INITIALIZED_APP }), [dispatch]);

    useEffect((): any => {
        if (data.length === 0) {
            toggleFilterAction();

            return Loader;
        }
    }, [data]);

    return (
        <Switch>
            <Route path={ROUTES.MAIN} component={Main} />
            <Redirect exact from='/' to={ROUTES.MAIN} />
        </Switch>
    );
}
