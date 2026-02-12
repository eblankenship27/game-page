import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import GameList from "./pages/GameList"
import NewGame from "./pages/NewGame"
import Game from "./pages/Game"
import { Provider } from "react-redux"
import { store } from "./stores/store"

function App() {

  function NoSuchRoute() {
    const { pathname } = useLocation();
    return `No page found for route '${pathname}'`;
  }



  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<GameList/>} />
          <Route path='game/new' element={<NewGame/>} />
          <Route path='game/:gameId' element={<Game />} />

          <Route path='/*' element={<NoSuchRoute />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App
