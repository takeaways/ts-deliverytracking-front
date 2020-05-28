import * as React from "react";
import * as Redux from "react-redux";
import {getCount} from "../../Reducer/Count";



export const useCountAction = () => {
    const dispatch = Redux.useDispatch();
    return React.useCallback((count: number) => {
        dispatch(getCount(count))
    }, [dispatch])
};

export default useCountAction;
