import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Attendance from './components/Attendance';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import View from './components/View';
import Bootstrap from './components/Bootstrap';
import Logout from './components/Logout';


function App() {
  return (
    <div>
      <main>
        <div className="container py-4">
        <Navbar />

        <Attendance />

          <div className="row align-items-md-stretch">
          <View />
          
          <Edit />
          </div>

          <Footer />
        </div>
      </main>
      <Bootstrap />
    </div>
  );
}

export default App;
