import * as Redux from "redux";

import address from "./Address";
import count from "./Count";

const rootReducer = Redux.combineReducers({address, count});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
