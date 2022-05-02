import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {
  useEffect( ()=>{
    fetchData()
  }, [])
  let [advice, setAdvice] = useState('')

  const fetchData = () =>
    axios({
        'method':'GET',
        'url':'https://api.adviceslip.com/advice'
      }).then((response) =>{
        setAdvice(response.data.slip)
        document.title = `Advice #${advice.id}` 
      })
  return (
    <div className='min-w-full bg-dark-blue p-4 min-h-screen h-screen flex items-center font-manrope'>
      {advice.id &&
        <div className='bg-dark-gray-blue w-full md:w-3/5 lg:w-1/3 mx-auto rounded-xl p-12 text-center relative'>
          <h1 className='tracking-[4px] uppercase text-neon-green font-semibold text-xs'>
            Advice #{advice.id}
          </h1>
          <p className='font-bold text-[#e2e8f0] text-2xl my-7'>
            {advice.advice}
          </p>
          <div className='flex items-center text-gray-300'>
            <div className="border-t mr-2 flex-grow border-gray-blue"></div>
            <i className="fa-solid fa-pause text-[#e2e8f0]"></i>
            <div className="border-t ml-2 flex-grow border-gray-blue"></div>
          </div>
          <div onClick={(e) => fetchData(e)} className='rounded-full px-4 py-3 mx-auto bg-neon-green text-gray-900 absolute translate-y-1/2 left-0 right-0 max-w-max hover:drop-shadow-3xl transition-all'>
            <i className="fa-solid fa-dice-five"></i>
          </div>

        </div>
      }
      {!advice.id &&
        <div className='bg-dark-gray-blue w-full md:w-1/3 mx-auto rounded-xl p-12 text-center relative'>
          <div className='flex items-center justify-center text-gray-300 text-center'>
            <i className="fa-solid fa-yin-yang text-5xl fa-spin text-[#e2e8f0]"></i>
          </div>
        </div>
      }
      <div className='absolute bottom-0 left-0 right-0 text-center text-gray-blue text-sm pb-3 hover:text-[#e2e8f0] max-w-fit mx-auto'><a href='https://github.com/Michael-Ilesanmi' rel='noreferrer' target='_blank'>©_localdev</a></div>
    </div>
  );
}

export default App;
