import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((response) => {
      setVideos(response.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for:&nbsp;
        <span style={{ color: "#F31503" }}>{searchTerm}&nbsp;</span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
