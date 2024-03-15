import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/pages/navbar/Navbar";
import UserProfile from "../pages/profile/UserProfile";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Feed from "../pages/feed/Feed";
import CompleteProfile from "../pages/completeProfile/CompleteProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/app/*"
          element={
            <>
              <Navbar>
                <Routes>
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/completeprofile" element={<CompleteProfile />} />
                  <Route path="/feed" element={<Feed />} />
                </Routes>
              </Navbar>
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
