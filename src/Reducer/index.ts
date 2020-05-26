import * as Redux from 'redux';

import member from './Member';
import address from "./Address"

const rootReducer = Redux.combineReducers({ member, address });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
