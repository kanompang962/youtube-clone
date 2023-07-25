import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  //   console.log(video);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      {/* Image */}
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      {/* Description */}
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={video.id.videoId ? `video/${video.id.videoId}` : demoVideoUrl}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video?.snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
