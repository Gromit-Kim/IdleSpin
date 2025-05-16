import {Route, Routes} from "react-router"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Roulette from "./pages/Roulette"
import Todo from "./pages/Todo"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="roulette" element={<Roulette/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="*" element={<div>404 Not Found</div>}/>
      </Route>
    </Routes>
  );
}

export default App
