import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./componentes/Landing";
import Home from "./componentes/Home";
import Detail from "./componentes/Detail";
import CreatePokemon from "./componentes/CreatePokemon";
import NotFound from "./componentes/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
