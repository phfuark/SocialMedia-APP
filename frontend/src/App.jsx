import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UserProfile from "./routes/User_profile"; 
import Layout from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/:username" element={<Layout><UserProfile /></Layout>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
