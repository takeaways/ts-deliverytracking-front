import { MemberType } from '../Constants/Types/member';

//action's name
const POST_MEMBER = 'POST_MEMBER';

export const postMember = (memberInfo: MemberType) =>
	({
		type: POST_MEMBER,
		data: memberInfo,
	} as const);

type MemberActionType = ReturnType<typeof postMember>;
const initialState: MemberType = {
	id: '',
	customer: '',
	email: '',
	state: '',
};

const memberReducer = (
	state: MemberType = initialState,
	action: MemberActionType
) => {
	switch (action.type) {
		case POST_MEMBER: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default memberReducer;
