import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./nav/Home"
import About from "./nav/About"
import Contact from "./nav/Contact"
import Service from "./nav/Service"
import Counter from "./Hooks/Counter"
import Effect from "./Hooks/Effect"
import Reducer from "./Hooks/Reducer"
import Callback from "./Hooks/Callback"
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="effect" element={<Effect/>}/>
        <Route path="reducer" element={<Reducer/>}/>
        <Route path="callback" element={<Callback/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
