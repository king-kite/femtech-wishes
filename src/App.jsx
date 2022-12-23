function App() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="h-[100vh] w-1/2">
          <img className="h-full w-full" src="/images/Gleft.png" alt="Left Door" />
        </div>
        <div className="h-[100vh] w-1/2">
          <img className="h-full w-full" src="/images/Grigh.png" alt="Right Door" />
        </div>
      </div>
      <div 
        className="absolute flex flex-col left-1/2 items-center top-[30%]"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="h-[100px] w-[75px]">
          <img className="h-full w-full" src="/images/arrow.gif" alt="arrow-pointing-down" />
        </div>
        <div className="bell cursor-pointer h-[150px] w-[150px]">
          <img className="h-full w-full" src="/images/bell.png" alt="bells" />
        </div>
      </div>
    </div>
  )
}

export default App