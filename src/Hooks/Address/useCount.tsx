import * as Redux from 'react-redux';
import * as React from "react";

import {RootState} from '../../Reducer';


const useCount = () => {
    const {count} = Redux.useSelector((state: RootState) => state.count);
    return count || 0;
};
export default useCount;


