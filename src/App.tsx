import React, { useCallback, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Hits, TYPES } from './constants/types';
import { selector } from './reducers/app';
import { Container, GridList, GridListTile, GridListTileBar, IconButton, ListSubheader } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

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

function App() {
    const classes = useStyles();

    const { data } = useSelector(selector);
    const dispatch = useDispatch();
    const toggleFilterAction = useCallback(() => dispatch({ type: TYPES.INITIALIZED_APP }), [dispatch]);

    useEffect(() => {
        if (data.length === 0) {
            toggleFilterAction();
        }
    }, [data]);

    return (
        <Container>
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto', width: '100%' }}>
                        <ListSubheader component="div">Image</ListSubheader>
                    </GridListTile>
                    {data.map((tile: Hits) => (
                        <GridListTile style={{ width: '33%' }} key={tile.largeImageURL}>
                            <img src={tile.largeImageURL} alt={tile.user} />
                            <GridListTileBar
                                title={tile.user}
                                subtitle={<span>by: {tile.user}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.user}`} className={classes.icon}>
                                        {/*<InfoIcon />*/}
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container>
    );
}

export default App;
