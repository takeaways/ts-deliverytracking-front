import * as React from "react";
import * as Redux from "react-redux";
import {getAddress} from "../../Reducer/Address";

const useGetAddressAction = () => {
    const dispatch = Redux.useDispatch();
    return React.useCallback((data) => {
        dispatch(getAddress(data))
    }, [dispatch])
};

export default useGetAddressAction;