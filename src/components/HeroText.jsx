
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react';


const HeroText = () => {
    const words = ["Frontend", "Backend", "UI/UX Designer"]; 
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40
    md:text-left rounded-3xl bg-clip-text">
        {/* Dekstop View */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}>
                Halo, Saya Akmal
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p 
                    className="text-5xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}>
                   Membangun Pengalaman<br />Digital Sebagai
                </motion.p>
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}>
                        <FlipWords words={words}
                    className="font-black text-white text-8xl" />
                </motion.div>
                <motion.p 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}
                    className="text-4xl font-medium text-neutral-300">
                    Platform Digital
                </motion.p>
            </div>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p 
                className="text-4xl text-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}>
                 Halo, Saya Akmal
            </motion.p>
            <div className="">
                <motion.p 
                className="text-5xl font-black text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}>
                   Pengembang
                </motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}>
                    <FlipWords words={words}
                    className="font-bold text-white text-7xl" />
                </motion.div>
                <motion.p 
                className="text-4xl font-black text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}
                >
                    Web Aplikasi
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText