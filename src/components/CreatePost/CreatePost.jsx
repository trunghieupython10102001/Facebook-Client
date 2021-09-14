import React, { useContext, useRef, useState } from 'react'
import './CreatePost.css'
import { ArrowDropDown, Close, LocalOffer, LocationOn, Mood, MoreHoriz, PhotoLibrary, Public } from '@material-ui/icons'
import classNames from 'classnames'
import { CreatePostContext } from '../../contexts/CreatePostContext'
import axios from 'axios'
import { PostContext } from '../../contexts/PostContext'

const CreatePost = () => {
	const { hidden, toggleCreatePostBox } = useContext(CreatePostContext)
	const [imageSelected, setImageSelected] = useState(null)
	const [imagePreview, setImagePreview] = useState(undefined)
	const [postContent, setPostContent] = useState('')
	const { addToAllPosts } = useContext(PostContext)
	const ref = useRef(null)
	
	function CreatePostHandler() {
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmY5MDMzNDQ5NGJiNTNiMjM5MGJjNyIsImlhdCI6MTYzMTE4MTE4MCwiZXhwIjoxNjMxMjY3NTgwfQ.7i0om41eXIrt2mfbIP0ieB9jmuyIYSTj8UoiMrJ_xUU"
		const postData = new FormData()
		postData.append('content', postContent)
		postData.append('image', imageSelected)
		axios({
			method: 'POST',
			url: '/post/create',
			headers: {
				'Authorization': `Bearer ${token}`,
			},
			data: postData,
			
		})
			.then(res => {
				console.log(res.data)
				addToAllPosts(res.data)
			})
		toggleCreatePostBox()
		setImageSelected(null)
		setPostContent('')
		ref.current.innerText = ''
	}

	function getPostContent(e) {
		setPostContent(e.target.innerText)
	}

	function selectImageHandler(e) {
		setImageSelected(e.target.files[0])
		if (e.target.files[0]) {
			setImagePreview(URL.createObjectURL(e.target.files[0]))
		}
	}

	function clearPreviewImage() {
		setImagePreview(undefined)
		setImageSelected(undefined)
	}

	return (
		<div className={classNames("CreatePost", {"hidden": hidden})}>
			<div onClick={toggleCreatePostBox} className="modal">
			</div>
			<div className="CreatePostBox">
				<div className="CreatePostHeader">
					<p className="CreatePostHeaderText">Tạo bài viết</p>
					<span onClick={toggleCreatePostBox} className="CreatePostClose hover"><Close /></span>
				</div>
				<div className="CreatePostUser">
					<img src="/assets/img/avatar.jpeg" alt="avatar" className="ShareAvatar" />
					<div className="CreatePostUserText">
						<span className="CreatePostUserName">Trung Hieu</span>
						<div className="CreatePostState">
							<Public className="CreatePostStateIcon" />
							Công khai
							<ArrowDropDown className="CreatePostStateIconDrop" />	
						</div>
					</div>
				</div>
				<div className="CreatePostContent">
					<div ref={ref} onInput={getPostContent} contentEditable="true" data-text="Hiếu ơi, bạn đang nghĩ gì thế?" className="CreatePostTextContent">
					</div>
					<div className="CreatePostMediaContent">
						{imageSelected && <img src={imagePreview} alt="img" className="CreatePostImage" /> }
						{imageSelected && <span onClick={clearPreviewImage} className="CreateMediaClose hover"><Close /></span>}
						<input onChange={selectImageHandler} type="file" name="image" id="imageInput" />
					</div>
				</div>
				<div className="CreatePostAdd">
					<span className="CreatePostAddText">Thêm vào bài viết</span>
					<div className="CreatePostAddIcons">
						<label htmlFor="imageInput">
							<div className="PostAddIconWrapper hover">
								<PhotoLibrary id="photo" className="PostAddIcon" />
							</div>
						</label>
						<div className="PostAddIconWrapper hover">
							<LocalOffer id="tag" className="PostAddIcon" />
						</div>
						<div className="PostAddIconWrapper hover">
							<Mood id="mood" className="PostAddIcon" />
						</div>
						<div className="PostAddIconWrapper hover">
							<LocationOn id="location" className="PostAddIcon" />
						</div>
						<div className="PostAddIconWrapper hover">
							<MoreHoriz id="more" className="PostAddIcon" />
						</div>
					</div>
				</div>
				<div onClick={CreatePostHandler} className="CreatePostSubmit">
					<div className="CreatePostSubmitBtn actived">Đăng</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
