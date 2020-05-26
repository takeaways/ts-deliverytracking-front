import * as Redux from 'react-redux';
import * as React from "react";

import { RootState } from '../../Reducer';


const useAddress = () => {
    const {addressInfo} = Redux.useSelector((state:RootState) => state.address);
    return addressInfo
};

export default useAddress


