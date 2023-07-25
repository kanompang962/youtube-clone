import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fetch Data Channel
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((response) =>
      setChannelDetail(response.items[0])
    );
    // fetch Videos Channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (response) => setVideos(response.items)
    );
  }, [id]);
  console.log(channelDetail);
  return (
    <Box minHeight="95vh">
      {/* Header */}
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(19,188,237,1) 0%, rgba(237,89,238,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channelDetail} marginTop="-110px" />
      </Box>
      {/* Detail */}
      <Box display="flex" p="2">
        <Box sx={{ ml: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
