import './App.scss';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Servicepage from './Pages/Servicepage/Servicepage';
import Newspage from './Pages/Latestnewspage/Newspage';
import Postpage from './Pages/Postpage/Postpage';
import Createadmin from './Pages/AdminPanel/CreateAdmin/Createadmin';
import Adminlogin from './Pages/AdminPanel/Adminlogin/Adminlogin';
import DataProvider from './Context/DataProvider';
import Adminpanel from './Pages/AdminPanel/Adminpanel/Adminpanel';
import { useState } from 'react'; 



const PrivateRoute = ({ isAdminAuthenticated, ...props }) => {
  return isAdminAuthenticated ? <><Outlet /></> : <Navigate replace to={'/admin'} />
}


function App() {

  const [isAdminAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DataProvider>
      <Router basename='/PJSSR'>
        <div className="App">
          <Routes>
            
            <Route path='/' element={<Homepage />} />
            <Route path='/aboutus/:abtid' element={<Aboutpage />} />
            <Route path='/services/:srvcid' element={<Servicepage />} />
            <Route path='/latestnews' element={<Newspage />} />
            <Route path='/addpost' element={<Postpage />} />

            {/* Admin Routes */}
            <Route path='/admin' element={<Adminlogin setIsAuthenticated={setIsAuthenticated} />} />
            <Route path='/admin/create' element={<Createadmin />} />
            <Route path='/' element={<PrivateRoute isAdminAuthenticated={isAdminAuthenticated} />}>
              <Route path='/admin/dash/:dashid' element={<Adminpanel />} />
            </Route>

            <Route path='*' element={<Homepage/>} />

          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;




