import { TOGGLE_CREATE_POST } from "./types"

export const CreatePostReducer = (state, action) => {
	const { type, payload } = action

	switch (type) {

		case TOGGLE_CREATE_POST:
			return !state

		default:
			return state
	}
}

