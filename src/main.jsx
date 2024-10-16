import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router.jsx";
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
   <RouterProvider router={Router}/>
   </Provider>
  </StrictMode>,
)