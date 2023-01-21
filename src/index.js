import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './route/AppRouter'
import Header from './structure/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>  
        <AppRouter />
        <Header/>
    </>
);
