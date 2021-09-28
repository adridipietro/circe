import React from 'react'
import { connect } from 'react-redux'
import { VideoCard } from './VideoCard'
//import Search from '../Search'

const VideosContainer = (props) => {

    const renderVideos = (props) => {
        //debugger
        return props.videos.map(video => {
            return <VideoCard key={video.id} {...video}/>
        })
    }
    
    
    return (
        <div className="videos-container">
            {/* <Search 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            /> */}
            <h3>VIDEOS</h3>
            {renderVideos(props)}
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        videos: state.videos.videos
    }
}


export default connect(mapStateToProps, null)(VideosContainer)