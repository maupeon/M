import { useState } from 'react';
import Confetti from 'react-confetti'
import useWindowSize from './hooks/use-window-size';

export default function Home() {
    const size = useWindowSize();
    const [click, setClick] = useState(false)

    const handleClick = async() => {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        setClick(prev => !prev)
        await delay(4000)
        window.alert('¡Felicidades, acertaste!')
    }
  return (
    <div className={' flex bg-black  overflow-hidden flex-col justify-center items-center h-screen'}>
        {
            click ?
            <Confetti
                width={size.width}
                height={size.height}
                numberOfPieces={1000}
            />
            :
            <></>
        }
            <p className=' text-gray-300'>27/08/2021</p>

        <h1 className="text-4xl text-center font-normal tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className=" inline dark:text-white">¿Quieres ser</span>{' '}
            <span className=" text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-pink-500 inline ">mi novia?</span>
        </h1>
        <div className='mt-10'>

            <button onClick={handleClick} className='px-10  lg:px-14 py-2 mr-8 font-bold text-black transition duration-300 bg-greenM   rounded-full shadow-md sm:px-6 md:mr-6 '> Sí</button>            
            <button onClick={handleClick} className="px-3 py-2 font-bold transition duration-300   rounded-full bg-redM sm:px-6 ">
                {" "}
                Sí en rojo
            </button>
        </div>
      
        {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
            {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> *
        </div>
        <div>
            <div className="text-xl font-medium text-black">¿Quiéres ser mi novia?</div>
           
        </div>
        </div> */}
    </div>
  )
}
