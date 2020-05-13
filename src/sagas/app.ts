// outsource dependencies
import { takeEvery, put, call } from 'redux-saga/effects';
import { getData } from '../services/api';
import { TYPES } from '../constants/types';

// local dependencies
// import { authAPI } from '../services/api';
// import { APP, AUTH } from '../constans/types';

function* initializeApp() {
    try {
        const payload = yield call(getData);

        // yield put({ type: APP.INITIALIZED_SUCCESS });
        //
        // if (payload) {
        //     yield put({ type: AUTH.SET_USER_DATA, payload: { ...payload, isAuth: true } });
        // }
    } catch (e) {
        console.log(e);
    }
}

export default function* () {
    yield takeEvery(TYPES.INITIALIZED_APP, initializeApp);
}
