import * as Redux from 'redux';

import member from './Member';

const rootReducer = Redux.combineReducers({ member });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
