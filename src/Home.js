import React from 'react';
import ReactDOM from 'react-dom/client';
import Footbar from './headerFooter/footer';
import Nav from './headerFooter/header';
import './home.css';
import UserLogin from './login/login';
import BusDetails from './Bus/busDetails';
import College from './collage/College';

function Home() {
   return(
    <div className=''>
        {/* <div>
            <Nav />
        </div> */}
        <div>
            <College />
        </div>
        {/* <div>
            <Footbar />
        </div> */}
    </div>
   );
}
export default Home;