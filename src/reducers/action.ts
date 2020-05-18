import { action } from 'typesafe-actions';
import { Hits, TYPES } from '../constants/types';

export const DATA = (data: Hits[], currentPage: number = 1) => action(TYPES.DATA, { data, currentPage });
