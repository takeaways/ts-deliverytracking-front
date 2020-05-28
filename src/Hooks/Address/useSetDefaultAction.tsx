import * as React from "react";
import * as Redux from "react-redux";
import { setDefault } from "../../Reducer/Address";


const useSetDefaultAction = () => {
    const dispatch = Redux.useDispatch();
    return React.useCallback(({ addressId }: { addressId: number }) => {
        dispatch(setDefault(addressId))
    }, [dispatch])
};

export default useSetDefaultAction;
