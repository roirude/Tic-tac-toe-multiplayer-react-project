import React from 'react';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className=' bg-cyan-500 h-screen w-full flex justify-center items-center'>
      <div>
        <Game />
        <Footer />
      </div>
    </div>
  )
}

export default App
