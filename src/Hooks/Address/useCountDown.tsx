import * as React from "react";
import * as Redux from "react-redux";
import {getDown} from "../../Reducer/Count";


export const useCountDown = () => {
    const dispatch = Redux.useDispatch();
    return React.useCallback(() => {
        dispatch(getDown());
    }, [dispatch]);
};

export default useCountDown;
