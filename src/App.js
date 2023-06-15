import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laylout from "./components/Laylout";
import routes from "./router/routes.js"

function App() {
  return (
    <BrowserRouter>
      <Laylout>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </Laylout>
    </BrowserRouter>
  );
}

export default App;
