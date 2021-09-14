import { CREATE_POST } from "./types"

export const PostReducer = (state, action) => {
	const { type, payload } = action

	switch (type) {

		case CREATE_POST:
			return [payload, ...state]

		default:
			return state
	}
}


