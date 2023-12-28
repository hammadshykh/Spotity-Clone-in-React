import "./App.css";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeMusic from "./Components/Home_Music/Home_Music";
import SearchPage from "./Components/SearchPage/SearchPage";
import Track from "./Components/Track/Track";
function App() {
  return (
    <div>
      <Box bg="black">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/HomeMusic" element={<HomeMusic />} />
          <Route exact path="/Search" element={<SearchPage />} />
          <Route exact path="/Track" element={<Track />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
