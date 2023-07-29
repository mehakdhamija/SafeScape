import React from 'react'
import Navbar from "./components/Navbar";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import RegisterComplaint from './components/RegisterComplaint';
import About from './components/About';
import AllProblems from './components/AllProblems';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

// import ComplaintForm from './components/ComplaintForm';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'contact',
    element: <ContactUs/>
  },
  {
    path:'about',
    element: <About/>
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'signup',
    element: <SignUp/>
  },
  {
    path:'allProblems',
    element: <AllProblems/>
  },
  {
    path:'registerComplaint',
    element: <RegisterComplaint/>
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;



//      <Home/>
//       <About/>
//       <AllProblems/>
//       <ContactUs/>
//       {/* <ComplaintForm/> */}
//       <RegisterComplaint/>
//       <Login/>
//       <SignUp/>
//       <Footer/>