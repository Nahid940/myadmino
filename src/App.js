// import logo from './logo.svg';
import './App.css';
import Homepage from './component/homepage/Homepage';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar'

function App() {
  return (
    <div className="App">
        <Topbar/>
        <div className='container'>
            <Sidebar/>
            <Homepage/>
        </div>
    </div>
  );
}

export default App;
