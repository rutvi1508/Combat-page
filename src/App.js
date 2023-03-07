import { Route, Routes } from "react-router-dom";
import SignUp from "./component/signup";
import Welcome from "./component/welcome/index";
import ProfileType from "./component/profiletype/index";
import OptionalPage from "./component/optionalpage/index";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profiletype" element={<ProfileType />} />
        <Route path="/optionalpage" element={<OptionalPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
