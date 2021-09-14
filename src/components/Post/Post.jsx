import { ChatBubbleOutlineOutlined, MoreHoriz, Public, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import './Post.css'

const Post = ({post}) => {
	return (
		<div className="Post">
			<div className="PostHeader">
				<img src="/assets/img/avatar.jpeg" alt="avatar" className="PostAvatar" />
				<div className="PostText">
					<span className="PostUserName">Trung Hieu</span>
					<span className="PostTime">
						<span className="PostTimeText">19 phút</span>
						<span className="PostTimeDot">.</span>
						<Public className="PostState" />
					</span>
				</div>
				<div className="PostMoreBox hover">
					<MoreHoriz className="PostMore" />
				</div>
			</div>	
			<div className="PostContent">{post.content}</div>
			<div className="PostImageContent">
				{post.image[0].path && <img src={`http://localhost:4000/${post.image[0].path}`} alt="avatar" className="PostImage" /> }
			</div>
			<div className="PostInfo">
				<div className="PostEmoji">
					<div className="PostEmojiIcons">
						<img src="/assets/icons/heart.png" alt="like" className="EmojiIcon" />
						<img src="/assets/icons/haha.png" alt="like" className="EmojiIcon" />
					</div>
					<div className="PostEmojiCount">Bạn và 20 người khác</div>
				</div>
				<div className="PostCounter">
					<span className="PostCmtCount">10 bình luận</span>
					<span className="PostShareCount">1 lượt chia sẻ</span>
				</div>
			</div>
			<div className="PostActions">
				<div className="PostActionItem hover">
					<ThumbUpAltOutlined className="ActionIcon" />
					<span className="ActionText">Thích</span>
				</div>
				<div className="PostActionItem hover">
					<ChatBubbleOutlineOutlined className="ActionIcon" />
					<span className="ActionText">Bình luận</span>
				</div>
				<div className="PostActionItem hover">
					<ShareOutlined className="ActionIcon" />
					<span className="ActionText">Chia sẻ</span>
				</div>
			</div>
		</div>
	)
}

export default Post
