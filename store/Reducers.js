import { ACTIONS } from './Actions';

const reducers = (state, action) => {
	switch (action.type) {
		case ACTIONS.AUTH:
			return {
				...state,
				auth: action.payload,
			};

		case ACTIONS.ADD_USERS:
			return {
				...state,
				users: action.payload,
			};
		case ACTIONS.ADD_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
};

export default reducers;
