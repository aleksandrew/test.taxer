import { action } from 'typesafe-actions';
import { Hits, TYPES } from '../constants/types';

export const DATA = (data: Hits[]) => action(TYPES.DATA, { data });
