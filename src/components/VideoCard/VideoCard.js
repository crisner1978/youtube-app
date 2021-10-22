import React from 'react';
import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
    return (
        <div className="videocard">
            <img src={image} alt="" className="videocard__image" />
            <div className="videocard__info">
                <Avatar className="videocard__avatar" alt={channel} src={channelImage} /> 
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} views • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
