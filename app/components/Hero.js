import Demos from "./Demos"


function Hero() {
  return (
    <div className="">
        <h1 className='fadeIn font-extrabold ml-[10%] mt-32 sm:text-6xl'>Hello</h1>
        <h1 className='fadeIn font-extrabold ml-[10%] mt-6 sm:text-6xl wait'>Welcome to my portfolio!</h1>
        <Demos />
    </div>
  )
}

export default Hero