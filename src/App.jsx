import React from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main/Main';

import {FaHandPointUp} from "react-icons/fa";

function App() {

  const [showScrollBtn, setShowScrollBtn] = React.useState(false)

  window.onscroll = function() {scrollFunc()}

  const scrollFunc = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowScrollBtn(true)
    } else {
      setShowScrollBtn(false)
    }
  }

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='relative'>
    <Header />
    <Main />
    <FaHandPointUp onClick={scrollTop} className={`fixed bottom-4 ${showScrollBtn ? "block" : "hidden"} right-4 text-xl md:text-2xl hover:bg-blue-800 hover:fill-white duration-500 cursor-pointer`} />
    </div>
  )
}

export default App
