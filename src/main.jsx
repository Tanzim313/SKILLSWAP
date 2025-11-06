import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import Home from './Component/HOME/Home.jsx';
import Register from './Component/Register/Register.jsx';
import Login from './Component/Login/Login.jsx';
import AuthProvider from './Authprovider/AuthProvider.jsx';
import Profile from './Component/MyProfiles/Profile.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import allApp from './Component/APP/AllApp.jsx';
import AppDetails from './Component/APP/AppDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children:[
      {
        ///index:true,
        id: 'home-loader',
        loader:async()=>{
              const res = await fetch('/skill.json');
              const data = await res.json();
              
              console.log("data1:",data);

              return data;
        },

        path:'home',
        element: <Home></Home>
       

      },{

      path:'/appDetails/:id',
      element: 
      <PrivateRoutes>
              <AppDetails/>
      </PrivateRoutes>,

        
      id:'app-loader',
        loader:async()=>{
              const res = await fetch('/skill.json');
              const data = await res.json();
              
              
              return data;

             
        }

      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },{
        path: 'profile',
        element: 
        <PrivateRoutes>
            <Profile></Profile>
        </PrivateRoutes>
      }
    ]

  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
