import {useState} from 'react';
import { motion } from 'motion/react';


function Navigation() {
    return(
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="#home" className="nav-link">
                    Beranda
                </a>
            </li>
            <li className="nav-li">
                <a href="#about" className="nav-link">
                    Tentang
                </a>
            </li>
            <li className="nav-li">
                <a href="#work" className="nav-link">
                    pekerjaan
                </a>
            </li>
            <li className="nav-li">
                <a href="#contact" className="nav-link">
                    Kontak
                </a>
            </li>
            <li className="nav-li">
                <a href="#project" className="nav-link">
                    Projek
                </a>
            </li>
        </ul>
    )
}

const Navbar = () => {
const[isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                Kemal
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400
                hover:text-white focus:outline-none sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                    className="h-6 w-6" alt="toggle"/>
                </button>
                <nav className="hidden sm:flex">
                    <Navigation />
                </nav>
            </div>
        </div>
        {isOpen &&( 
        < motion.div 
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity:0, x: -10 }}
            animate={{ opacity:1, x: 0 }}
            style={{ mxHeight: "100vh" }}
            transition={{ duration: 1 }}>
            <nav className="pb-5">
                <Navigation />
            </nav>
        </motion.div>
        )}
    </div>
  )
}

export default Navbar