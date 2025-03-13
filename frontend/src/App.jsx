import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UserProfile from "./routes/User_profile"; 

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/:username" element={<UserProfile />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
