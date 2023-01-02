import Spline from '@splinetool/react-spline';

export default function Hero() {

    return(
            <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-28 space-y-0 md:space-y-0">
                <div className="flex flex-col mb-32 space-y-6 md:w-1/2 border-l-4 border-[#353738] pl-5">
                    <h1 className="max-w-md hero-text text-4xl text-center md:text-5xl md:text-left text-white font-bold">Caviar Case</h1>
                    <p className="max-w-sm text-center  text-sm text-[#8b8c8d] md:text-left leading-[1.125rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non arcu ut nulla habitasse et augue massa egestas vulputate. In in pharetra tortor elit nisl vel urna amet egestas. Dignissim ac elementum nunc vitae quisque. Vestibulum quis laoreet aliquam sem nam massa tellus sit. Donec egestas tempus vivamus imperdiet phasellus volutpat auctor. Magna non ut tempus tristique tristique in.Nunc, posuere leo, eu semper pellentesque quis volutpat integer potenti. Egestas dolor, a feugiat sit arcu scelerisque egestas. Feugiat integer viverra nisl mi tellus.    
                    </p>
                    <span className='text-[#8b8c8d] text-sm text-center md:text-left'>Price: <span className='text-[#FFC700] font-[900] text-2xl'>7500 $</span></span> 
                    <button className='bg-[#FFC700]  w-28 h-10 text-black font-[700] text-center rounded-[5.15412px] md:mx-0 mx-auto '>Buy now</button>
                </div>
                <div className='relative md:w-[400px]'>
                    <div className='absolute top-0 -left-12 md:w-72 md:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opa scale-125'></div>
                    <div className='absolute top-0 -right-12 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity'></div>
                    <div className='absolute -bottom-1 left-20 md:w-72 md:h-72 bg-[#FF5C00] rounded-full mix-blend-multiply filter blur-[96px] opacity'></div>
                    <img src='https://cdn.discordapp.com/attachments/937139620368511029/1059223562793271376/image.png' alt='' className='relative'/>
                </div>
            </div>
        )

}
