import React, { useContext, } from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import CreatePost from '../CreatePost/CreatePost'
import { PostContext } from '../../contexts/PostContext'
import { v4 as uuidv4 } from 'uuid';

const Feed = () => {
	const { allPost } = useContext(PostContext)

	return (
		<div className="Feed col-6">
			<Share />
			<CreatePost />
			{
				allPost.map(post => {
					return <Post key={uuidv4()} post={post} />
				})
			}
		</div>
	)
}

export default Feed
	