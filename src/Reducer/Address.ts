import {AddressType} from '../Constants/Types/address';

/*
*
* */
const addresses = [
    {
        "id": 12382726352,
        "postnumber": 203928,
        "name": "홍길동",
        "address": "서울시 강남구 강남대로 364, 11층"
    },
    {
        "id": 12382726390,
        "postnumber": 233958,
        "name": "고길동",
        "address": "서울시 강남구 가양대로 32, 가양아파트 21동 201호"
    },
    {
        "id": 12382726393,
        "postnumber": 243929,
        "name": "이영신",
        "address": "서울시 서초구 서초대로 311, 20층"
    },
    {
        "id": 12382726493,
        "postnumber": 303297,
        "name": "이신영",
        "address": "충청북도 강화군 양수리 223, 양수빌딩 9층"
    },
    {
        "id": 12382726423,
        "postnumber": 309126,
        "name": "고신영",
        "address": "인천시 강화군 양수리 213, 가양아파트 21동 201호"
    }];




//action's name
const GET_ADDRESS = "GET_ADDRESS" as const;
const POST_ADDRESS = "POST_ADDRESS" as const;
const DELETE_ADDRESS = "DELETE_ADDRESS" as const;
const SET_DEFAULT = "SET_DEFAULT" as const;

//action
export const getAddress = (addressInfo:AddressType[]) =>
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
    | ReturnType<typeof setDefault>


interface InitialStateType {
    addressInfo?: AddressType[]
}

//initial state
const initialState: InitialStateType = {
    addressInfo:addresses
};

//reducer
const memberReducer = (
    state: InitialStateType = initialState,
    action: AddressActionType
) => {
    switch (action.type) {
        case GET_ADDRESS: {
            console.log("[ GET_ADDRESS ]");
            console.log("");
            return {
                ...state,
                addressInfo:action.data
            }
        }
        case POST_ADDRESS: {
            console.log("[ POST_ADDRESS ]");
            console.log("");
            return state;
        }
        case DELETE_ADDRESS: {
            console.log("[ DELETE_ADDRESS ]");
            console.log("");
            const addressInfo = state.addressInfo!.filter(address => {
                return address.id !== action.data;
            });
            return {
                ...state,
                addressInfo
            }
        }
        case SET_DEFAULT: {
            console.log("[ SET_DEFAULT ]");
            console.log("");
            const addressInfo = state.addressInfo!.map(address => {
                if(address.id !== action.data){
                    address.default = false;
                    return address
                }
                address.default = true;
                return address
            });
            return {
                ...state,
                addressInfo
            }
        }
        default: {
            console.log("[ default ]");
            console.log("");
            return state;
        }
    }
};

export default memberReducer;
