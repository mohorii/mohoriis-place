import {Routes, Route} from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";


function App() {

  return (
      <Routes>
          <Route path={"/"} element={<Navigation/>}>
              <Route index element={
                  <Home title="Arigatou gozaimasu" />
              }/>
          </Route>
      </Routes>
  );
}

export default App;