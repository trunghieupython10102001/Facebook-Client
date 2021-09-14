import React, { createContext, useReducer } from 'react'
import { CreatePostReducer } from '../reducers/CreatePostReducer'
import { TOGGLE_CREATE_POST } from '../reducers/types'

export const CreatePostContext = createContext()

export const CreatePostProvider = ({ children }) => {
	const [hidden, dispatch] = useReducer(CreatePostReducer, true)
	function toggleCreatePostBox() {
		dispatch({
			type: TOGGLE_CREATE_POST
		})
	}

	return (
		<CreatePostContext.Provider value={{
			hidden,
			dispatch,
			toggleCreatePostBox
		}}>
			{children}
		</CreatePostContext.Provider>
	)
}

export default CreatePostContext
