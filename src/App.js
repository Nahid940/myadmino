// import logo from './logo.svg';
import './App.css';
import Homepage from './component/homepage/Homepage';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar'

import {Route,Routes} from "react-router-dom";
import Userlist from './component/pages/userList/Userlist';

function App() {
  return (
    <div>
      <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/users" element={<Userlist />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
