import React, { createContext, useEffect, useReducer, useState } from "react"
import { PostReducer } from "../reducers/PostReducer"
import axios from "axios"

export const PostContext = createContext()

export const PostProvider = ({ children }) => {
	useEffect(() => {
		const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmY5MDMzNDQ5NGJiNTNiMjM5MGJjNyIsImlhdCI6MTYzMTE4MTE4MCwiZXhwIjoxNjMxMjY3NTgwfQ.7i0om41eXIrt2mfbIP0ieB9jmuyIYSTj8UoiMrJ_xUU`
		axios({
			method: "get",
			url: "/post/all",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => {
			setAllPost(res.data)
		})
	}, [])

	const [allPost, setAllPost] = useState([])

	function addToAllPosts(post) {
		setAllPost([post, ...allPost])
	}

	const [posts, dispatch] = useReducer(PostReducer, [])

	return (
		<PostContext.Provider
			value={{
				posts,
				dispatch,
				allPost,
				addToAllPosts,
			}}
		>
			{children}
		</PostContext.Provider>
	)
}
