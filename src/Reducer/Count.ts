import {AddressType} from '../Constants/Types/address';

/*
 *
 * */
//action's name
const GET_COUNT = 'GET_COUNT' as const;
const GET_DOWN = 'GET_DOWN' as const;

//action
export const getCount = (count:number) =>({
    type: GET_COUNT,
    data: count,
} as const);
export const getDown = () =>({
    type: GET_DOWN,
} as const);
//action type
type CountActionType =
    | ReturnType<typeof getCount>
    | ReturnType<typeof getDown>


interface InitialStateType {
    count: number;
}

//initial state
const initialState: InitialStateType = {
    count: 0,
};

//reducer
const countReducer = (
    state: InitialStateType = initialState,
    action: CountActionType
) => {
    switch (action.type) {
        case "GET_COUNT": {
            console.log('[ GET_COUNT ]');
            return {
                ...state,
                count:action.data
            };
        }
        case GET_DOWN:{
            return {
                ...state,
                count:state.count !== 0 && state.count - 1
            }
        }
        default: {
            return state;
        }
    }
};

export default countReducer;
