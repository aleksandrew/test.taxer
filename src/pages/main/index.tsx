import React, { useState, useEffect, useCallback, FC, memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hits, TYPES } from '../../constants/types';
import { selector } from '../../reducers/app';
import _ from 'lodash';
import {
    Button,
    Container,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    ListSubheader,
    Slide,
} from '@material-ui/core';
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
            justifyContent: 'center',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        footerBtn: {
            marginTop: 20,
            padding: '20px 0',
            borderRadius: 0
        },
    })
);

interface ICurrentData {
    id: string,
    user: string,
    tags: string,
    largeImageURL: string,
}

interface IVisible {
    id: string | null
    isVisible: boolean
}

const Main = memo(() => {
    const classes = useStyles();

    const { data, currentPage } = useSelector(selector);

    const dispatch = useDispatch();
    const getData = useCallback((page: number) => dispatch({ type: TYPES.GET_DATA, page }), [dispatch]);

    const [visible, setVisible] = useState<IVisible>({isVisible: false, id: null});

    const showMoreImage = useCallback(() => {
        getData(currentPage + 1);
    }, [currentPage]);

    const isVisibleTitle = useCallback((id: string | null = null) => {
        if ( id || !visible.isVisible ) {
            setVisible({isVisible: true, id})
        }
        else if ( visible.isVisible ) {
            setVisible({isVisible: false, id: null})
        }
    }, [visible]);

    const currentData = useMemo(() =>
        _.map(data, (item: Hits)=> ({
            id: item.id,
            user: item.user,
            tags: item.tags,
            largeImageURL: item.largeImageURL,
        })), [data]
    );

    return (
        <Container>
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto', width: '100%' }}>
                        <ListSubheader component="div">Image</ListSubheader>
                    </GridListTile>
                    {_.map(currentData, (tile: ICurrentData) => (
                        <GridListTile style={{ width: '33%' }} key={tile.id} onMouseEnter={() => isVisibleTitle(tile.id)} onMouseLeave={() => isVisibleTitle()}>
                            <img src={tile.largeImageURL} alt={tile.user} />
                            <Slide direction="up" in={visible.id === tile.id} >
                                <GridListTileBar
                                title={`tags: ${tile.tags}`}
                                subtitle={<span>by: {tile.user}</span>}
                            />
                            </Slide>
                        </GridListTile>
                    ))}
                </GridList>

                <Button onClick={showMoreImage} className={classes.footerBtn} variant="contained" color="primary" fullWidth>
                    show more
                </Button>
            </div>
        </Container>
    );
});

export default Main;
