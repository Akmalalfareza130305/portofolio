import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("Sukses");
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    const showAlertMessage=(type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            console.log("Form Submitted:", formData);
            await emailjs.send("service_i94koei", "template_forzvvk", {
            from_name: formData.name,
            to_name: "Muhammad Akmal",
            from_email: formData.email,
            to_email: "kemalakmal130305@gmail.com",
            message: formData.message,
        }, "42u32bKhvgH9ECr53");
        setIsLoading(false);
        setFormData({name:"", email:"", message:""});
        showAlertMessage("Sukses", "Pesan anda telah terkirim");
        } catch (error) {
            setIsLoading(false);
            console.log(error);
             showAlertMessage("danger", "Pesan anda tidak terkirim");
        }
        
        // service_i94koei
        // template_forzvvk
    };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Yuk Ngobrol</h2>
                <p className="font-normal text-neutral-400">
                    Saya senang mendengar cerita baru. Ayo ngobrol kapan saja untuk berdiskusi atau memulai kolaborasi.
                </p>
            </div>
            <form action="" className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">
                        Nama Lengkap
                    </label>
                    <input id="name" name="name" type="text" className="field-input field-input-focus" placeholder="John Doe" autoComplete="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="field-label">
                        Email
                    </label>
                    <input id="email" name="email" type="email" className="field-input field-input-focus" placeholder="JohnDoe@gmail.com" autoComplete="email"  value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="field-label">
                        Pesan
                    </label>
                    <textarea id="message" name="message"  rows="4" className="field-input field-input-focus" placeholder="Tertarik untuk bekerja sama......"  value={formData.message} onChange={handleChange} autoComplete="message" required />
                </div>
                <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                    {!isLoading ? "Chat Sekarang" : "Mengirim..."}
                </button>
            </form>
        </div>       
    </section>
  )
}

export default Contact