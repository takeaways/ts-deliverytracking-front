import * as React from "react";
import * as Redux from "react-redux";
import {deleteAddress} from "../../Reducer/Address";


const useDeleteAddressAction = () => {
    const dispatch = Redux.useDispatch();
    return React.useCallback(({addressId}: { addressId: number }) => {
        dispatch(deleteAddress(addressId));
    }, [dispatch]);
};

export default useDeleteAddressAction;
