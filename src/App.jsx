import { Box } from "@mui/material";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Feed />
      </>
    ),
  },
  {
    path: "/video/:id",
    element: (
      <>
        <Navbar />
        <VideoDetail />
      </>
    ),
  },
  {
    path: "/channel/:id",
    element: (
      <>
        <Navbar />
        <ChannelDetail />
      </>
    ),
  },
  {
    path: "/search/:searchTerm",
    element: (
      <>
        <Navbar />
        <SearchFeed />
      </>
    ),
  },
]);

function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
