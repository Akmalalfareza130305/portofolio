import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="c-space pb-3 text-sm text-neutral-400">
      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4" />

      {/* Baris footer */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Kiri: S&K & Privasi */}
        <div className="flex items-center gap-2">
          <a href="/terms" className="hover:text-white transition">Syarat &amp; Ketentuan</a>
          <span className="opacity-40">|</span>
          <a href="/privacy" className="hover:text-white transition">Kebijakan Privasi</a>
        </div>

        {/* Tengah: Sosial media (akan pindah baris kalau layar sempit) */}
        <div className="flex items-center gap-3 order-3 w-full justify-center sm:order-none sm:w-auto">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} aria-label={social.name} target="_blank" rel="noreferrer">
              <img src={social.icon} className="h-5 w-5" alt={social.name} />
            </a>
          ))}
        </div>

        {/* Kanan: Copyright */}
        <p className="whitespace-nowrap">&copy; 2025 Muhammad Akmal Naufal Al Fareza</p>
      </div>
    </section>
  );
};

export default Footer;
