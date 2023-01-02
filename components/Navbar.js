export default function Navbar() {

    return(
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2 w-20">
                    <img src="https://cdn.discordapp.com/attachments/937139620368511029/1055572010165616760/image.png" alt="logo"/>
                </div>
                <div className="hidden md:flex space-x-12 text-[#c4c5c5] text-sm">
                    <a href="#" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Products</a>
                    <a href="#" className="hover:text-white">Services</a>
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>
                <a href="#_" class="hidden md:block items-center justify-center px-5 text-black py-2 text-base leading-6 whitespace-no-wrap bg-[#ffc700] rounded-md shadow-sm hover:bg-[#C09B10] focus:outline-none focus:ring-2 focus:ring-offset-2 font-[700]" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                    Register
                </a>
                
            </div>
        </nav>
        )

}