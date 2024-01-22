import { StateType } from 'typesafe-actions';
import reducers from '@/redux/reducers';

export type RootState = StateType<typeof reducers>;