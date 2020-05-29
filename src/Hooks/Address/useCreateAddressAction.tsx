import * as React from "react";
import * as Redux from "react-redux";
import {postAddress} from "../../Reducer/Address";
import {AddressType} from "../../Constants/Types/address";


export const useCreateAddressAction = () => {
    const dispatch = Redux.useDispatch();
    return React.useCallback((createInfo: AddressType) => {
        dispatch(postAddress(createInfo));
    }, [dispatch]);
};

export default useCreateAddressAction;
