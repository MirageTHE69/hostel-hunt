  import React from 'react';
  import PropTypes from 'prop-types';
  import Sidebar from '../components/Sidebar.js';
  import './globals.css';

  const RootLayout = ({ children}) => {
    return (
      <div className="layout">
    
      
      
        <main className="main-content">
          {children}
        </main>
        {/* Optional Footer Here */}
      </div>
    );
  };



  export default RootLayout;
