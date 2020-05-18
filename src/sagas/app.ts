// outsource dependencies
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getData } from '../services/api';
import { TYPES } from '../constants/types';
import { DATA } from '../reducers/action';

// local dependencies
// import { authAPI } from '../services/api';
// import { APP, AUTH } from '../constans/types';

function* getImage({ ...payload }) {
    const { page } = payload;
    const currentData = yield select(state => state.app.data);

    try {
        const uploadedData = yield call(getData, page);
        const data = currentData.length === 0 ? [...uploadedData] : [...currentData, ...uploadedData];

        yield put(DATA(data, page));
    } catch (e) {
        console.warn(e);
    }
}

export default function* () {
    yield takeEvery(TYPES.GET_DATA, getImage);
}
