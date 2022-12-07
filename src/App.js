import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Editor from './pages/editor';
import Login from './pages/login';
import Home from './pages/home';
import { useEffect,React } from 'react';
import { gapi } from 'gapi-script';
// eslint-disable-next-line
import { Toaster } from 'react-hot-toast';

const client_id = "103973934189-cnq7av0r6l1ajh606oklikljjjtdkiac.apps.googleusercontent.com";


function App() {


    useEffect(()=>{
        function start() {
            gapi.client.init({
                clientId:client_id,
                scope: " "
            })
        };

        gapi.load('client:auth2',start);
    });

  return (
    
    <> 
    <div>
        <Toaster
            position="top-right"
            toastOptions={{
            success: {
            theme: {
                primary: '#4aed88',
                },
            },
            }}>
        </Toaster>
    </div>
    <Router>    
        <div>
            <Routes>  
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/editor/:id" element={<Editor/>} />                   
            </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
