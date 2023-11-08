import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import  HomeComponent from './HomeComponents.js';
// import VideoComponent from './VideoComponent.js';
import VideoPage from './VideoPage.js';
import './VideoPage.css';
function App() {
   return (
      <BrowserRouter>
         <Routes>
         {/* <Route path="/" element={<HomeComponent />}></Route> 
            <Route path="/video" element={<VideoComponent />}></Route>  */}
            <Route path="/" element={<VideoPage/>}></Route>
      </Routes>
   </BrowserRouter>

  );
}

export default App;