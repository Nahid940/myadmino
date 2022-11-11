// import logo from './logo.svg';
import './App.css';
import Homepage from './component/homepage/Homepage';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import Userlist from './component/pages/userList/Userlist';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Homepage/>
      ),
    },
    {
      path: "/users",
      element: (
        <Userlist/>
      ),
    },
  ]);
  return (
    <div>
        <Topbar/>
        <div className='container'>
            <Sidebar/>
            <RouterProvider router={router} />
        </div>
    </div>
  );
}

export default App;
