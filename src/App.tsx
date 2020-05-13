import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { filter } from 'minimatch';
import { useDispatch } from 'react-redux';
import { TYPES } from './constants/types';

function App() {
    const dispatch = useDispatch();
    const toggleFilterAction = useCallback(() => dispatch({ type: TYPES.INITIALIZED_APP }), [dispatch]);

    useEffect(() => {
        toggleFilterAction();
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
