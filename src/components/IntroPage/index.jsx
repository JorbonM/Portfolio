import pfpimage from '../../assets/pfp_website.png'
const IntroPage = () =>
{
    return <>
    <div className="w-full">
        <div className="grid grid-cols-6 grid-rows-6 gap-4">
            <div className="row-span-4 col-start-2 row-start-2">
                    <img src={pfpimage} className='rounded-full drop-shadow-md'/>
            </div>
            <div className="col-span-3 col-start-3 row-start-2">
                <h1 className="text-center font-bold text-[#f0eded] text-6xl">About Me</h1>
            </div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-3 text-[#f0eded] text-center">
                <p>Hi I'm Jordan. A fifth year student studying software Development and Maths from Sydney, Australia.</p>
            </div>
        </div>
    </div>
    </> 
}

export default IntroPage