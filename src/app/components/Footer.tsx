import Link from "next/link";


const Footer = () =>{
    return(
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                {/* left side */}
                <p className="text-sm mb-4 md:mb-0">
                    {"© 2024 My Blog. All rights reserved."}
                </p>
                {/* right side */}
                <div className="flex space-x-4">
                <Link href='https://facebook.com' target='_blank' className='text-gray-400 hover:text-[#759098]'>Facebook</Link>
                <Link href='https://twitter.com' target='_blank' className='text-gray-400 hover:text-[#759098]'>Twitter</Link>
                <Link href='https://linkedin.com' target='_blank' className='text-gray-400 hover:text-[#759098]'>Linkedin</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;