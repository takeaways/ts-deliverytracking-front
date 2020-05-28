import {AddressType} from '../Constants/Types/address';

/*
 *
 * */
//action's name
const GET_ADDRESS = 'GET_ADDRESS' as const;
const POST_ADDRESS = 'POST_ADDRESS' as const;
const DELETE_ADDRESS = 'DELETE_ADDRESS' as const;
const SET_DEFAULT = 'SET_DEFAULT' as const;

//action
export const getAddress = (addressInfo: AddressType[]) =>
    ({
        type: GET_ADDRESS,
        data: addressInfo,
    } as const);
export const postAddress = (address: AddressType) =>
    ({
        type: POST_ADDRESS,
        data: address,
    } as const);
export const deleteAddress = (id: number) =>
    ({
        type: DELETE_ADDRESS,
        data: id,
    } as const);
export const setDefault = (id: number) =>
    ({
        type: SET_DEFAULT,
        data: id,
    } as const);
//action type
type AddressActionType =
    | ReturnType<typeof getAddress>
    | ReturnType<typeof postAddress>
    | ReturnType<typeof deleteAddress>
    | ReturnType<typeof setDefault>;

interface InitialStateType {
    addressInfo: AddressType[] | [];
}

//initial state
const initialState: InitialStateType = {
    addressInfo: [],
};

//reducer
const addressReducer = (
    state: InitialStateType = initialState,
    action: AddressActionType
) => {
    switch (action.type) {
        case GET_ADDRESS: {
            console.log('[ GET_ADDRESS ]');
            return {
                ...state,
                addressInfo: [...state.addressInfo,...action.data],
            };
        }
        case POST_ADDRESS: {
            console.log('[ POST_ADDRESS ]');
            let addressInfo: AddressType[];
            if (action.data.default) {
                addressInfo = (state.addressInfo as AddressType[]).map(address => {
                    address.default = false;
                    return address;
                });
                (addressInfo as AddressType[]).unshift(action.data)
            } else {
                addressInfo = state.addressInfo;
                const index = addressInfo.findIndex(address => address.default);

                if (!!index) {
                    addressInfo.unshift(action.data);
                } else {
                    addressInfo.splice(1, 0, action.data);
                }
            }

            return {
                ...state,
                addressInfo
            }
        }
        case DELETE_ADDRESS: {
            console.log('[ DELETE_ADDRESS ]');
            const addressInfo = state.addressInfo!.filter((address) => {
                return address.id !== action.data;
            });
            return {
                ...state,
                addressInfo,
            };
        }
        case SET_DEFAULT: {
            console.log('[ SET_DEFAULT ]');
            const addressInfo = (state.addressInfo as AddressType[]).map((address) => {
                if (address.id !== action.data) {
                    address.default = false;
                    return address;
                }
                address.default = true;
                return address;
            });

            const index = addressInfo.findIndex(address => address.default);
            const defaultTarget = addressInfo.splice(index, 1);
            addressInfo.unshift(defaultTarget[0]);
            return {
                ...state,
                addressInfo
            };
        }
        default: {
            return state;
        }
    }
};

export default addressReducer;
