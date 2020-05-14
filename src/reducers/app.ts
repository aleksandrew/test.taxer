// outsource dependencies
import { Reducer } from 'redux';

// local dependencies
// import { APP } from '../constans/types';
import { DataPayload, Hits, TYPES } from '../constants/types';

const initialState: DataPayload = {
    data: [],
};

// export type InitialStateType = typeof initialState;

export const selector = (state: any) => state.app;

const app: Reducer<DataPayload> = (state = initialState, action: any) => {
    const { type, ...options } = action;

    switch (type) {
        case TYPES.DATA:
            return { ...state, ...options.payload };

        default:
            return state;
    }
};

export default app;
