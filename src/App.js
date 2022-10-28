import {Routes, Route} from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";

import Home from "./routes/home/home.component";
import Experience from "./routes/experience/experience.component";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Navigation/>}>
                <Route index element={
                    <Home title="Konnichiwa"/>
                }/>
                <Route path={"/experience"} element={
                    <Experience title="Experience"/>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
