import React from 'react';
import './App.css';
import List from './Components/List.jsx';
import Header from './Components/Header.jsx';
import Content from './Components/Content.jsx';
import Cart from './Components/Cart';

const App = () => {
  return (
    <div className="body">
      <div className='Header'>
        <Header />
      </div>
      <div className='MainBody'>
        <div className='List'>
          <List />
        </div>
        <div className='Content'>
          <Content />
        </div>
        <div className='Cart'>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
