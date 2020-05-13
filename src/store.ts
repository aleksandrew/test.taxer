// outsource dependencies
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';

// local dependencies
import sagasRoot from './sagas';
// import appReducer from './app-reducer';
// import authReducer from './auth-reducer';
// import usersReducer from './users-reducer';
// import profileReducer from './profile-reducer';
// import messageReducer from './message-reducer';

const rootReducer = combineReducers({
    // app: appReducer,
    form: formReducer,
});

const sagaMiddleware: any = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagasRoot);

export default store;
