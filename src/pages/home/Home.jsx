import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import RightBar from '../../components/RightBar/RightBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
import { CreatePostProvider } from '../../contexts/CreatePostContext'
import { PostProvider } from '../../contexts/PostContext'

const Home = () => {
	return (
		<PostProvider>
			<CreatePostProvider>
				<NavBar/>	
				<div className="HomeContainer">
					<SideBar/>
					<Feed/>
					<RightBar/>
				</div>
			</CreatePostProvider>
		</PostProvider>
	)
}

export default Home
	