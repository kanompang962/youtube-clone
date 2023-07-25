import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchAPI";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setvideo] = useState();
  const [videoList, setvideoList] = useState([]);

  useEffect(() => {
    // fetch video
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((response) =>
      setvideo(response.items[0])
    );
    // fetch video list
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (response) => setvideoList(response.items)
    );
  }, [id]);

  if (!video?.snippet) {
    return "Loading...";
  }

  console.log(video);

  return (
    <Box minHeight="95vh">
      <Stack display="flex" flexDirection={{ xs: "column", md: "row" }}>
        {/* View video */}
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            {/* video */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            {/* Video detaile */}
            {/* Title */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {video.snippet.title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              py={1}
              px={2}
              sx={{ color: "#fff" }}
            >
              {/* Channel */}
              <Link to={`/channel/${video.snippet.channelId}`}>
                <Typography color="#fff" sx={{ fontSize: { md: "1.25rem" } }}>
                  {video?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              {/* View Count */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(video?.statistics?.viewCount).toLocaleString()}
                  &nbsp;views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(video?.statistics?.likeCount).toLocaleString()}
                  &nbsp;likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* Lists videos */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videoList} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
