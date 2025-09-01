import { button } from 'motion/react-client'
import React from 'react'

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "Alamat Email kamu"

    const copyToClipboard = () => {
        Navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
  return (
    <button className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary
    w-[12rem] cursor-pointer overflow-hidden">
        <p className="flex items-center justify-center gap-2">
            <img src="assets/copy.svg" alt="copyicon" className="w-5" />
            Salin Alamat Email
        </p>
    </button>
  )
}

export default CopyEmailButton