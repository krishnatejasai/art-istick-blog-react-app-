import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import {BrowserRouter, Routes,Route} from "react-router-dom";



function App() {
 
  return (
    
    <BrowserRouter>
    <TopBar />
    <Routes>
    
    
    
<Route exact path="/" element={<Home />}>
</Route>
<Route path="/register"
element={<><Register /></>} >
</Route>
<Route path="/login" element={<Login />}>
</Route>
<Route path="/write"
element={<Write />}>
</Route>
<Route path="/settings"
element={<Settings />}>
</Route>
<Route path="/post/:postId"
    element={<Single />}>
</Route>
</Routes>
    </BrowserRouter>
    
  );
}

export default App;
