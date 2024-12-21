// Font for Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './components/App.jsx';
import Login from './views/Login.jsx';



const root = createRoot(document.getElementById('root'));

root.render(<BrowserRouter>
<Routes>
  <Route index element={ <App /> }/>
  <Route path='login' element={ <Login /> }/>
</Routes>
</BrowserRouter> );
