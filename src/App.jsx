import React from 'react';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <div className="bg-gray-100 max-w-[500px] mx-auto relative">
        <div className="bg-background bg-white h-full min-h-[100vh] px-4 py-8 shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[250px]">
              <img className="h-full w-full" src="/images/logo.svg" alt="femtech" />
            </div>
            <h5 className="font-extrabold text-lg text-blue-900 text-center uppercase">
              information technology
            </h5>
            <h1 className="bg-clip-text bg-gradient-to-r from-green-800 via-red-600 to-green-800 font-bold my-3 text-center text-transparent text-2xl uppercase">
              Wishes You
            </h1>
            <div className="flex justify-center">
              <div className="h-[250px] rounded-full w-[250px]">
                <img 
                  src="/images/merry-christmas.jpg"
                  className="h-full rounded-full w-full"                 
                  alt="merry christmas" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full z-50">
          <div className="flex items-center justify-between">
            <div className={`${
              open ? "open-door" : ""
            } door-left h-[100vh] w-1/2`}>
              <img className="h-full w-full" src="/images/Gleft.png" alt="Left Door" />
            </div>
            <div className={`${
              open ? "open-door" : ""
            } door-right h-[100vh] w-1/2`}>
              <img className="h-full w-full" src="/images/Grigh.png" alt="Right Door" />
            </div>
          </div>
          {!open && (
            <div 
              className="absolute flex flex-col left-1/2 items-center top-[30%]"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <div className="h-[100px] w-[75px]">
                <img className="h-full w-full" src="/images/arrow.gif" alt="arrow-pointing-down" />
              </div>
              <div onClick={() => setOpen(prevState => !prevState)} className="bell h-[150px] w-[150px]">
                <img 
                  className="cursor-pointer h-full transform transition w-full hover:scale-110" 
                  src="/images/bell.png" 
                  alt="bells" 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App