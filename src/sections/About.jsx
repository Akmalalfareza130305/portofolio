// About.jsx
import {useRef} from 'react';
import Card from '../components/Card';

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <div className="container c-space section-spacing">
        <h2 className="text-heading">Tentang Kemal</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 */}
          <div className="flex items-end grid-default-color grid-1">
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md:inset-y-10 lg:scale-[2.5]"
              alt=""
            />
            <div className="z-10">
              <p className="headtext">I'M Muhammad Akmal Naufal Al Fareza</p>
              <p className="subtext text-justify indent-8">
                Saya adalah mahasiswa Politeknik Negeri Malang PSDKU Lumajang jurusan Teknologi Informasi.
                Saya sekarang menempuh di semester lima. Saya memiliki minat yang besar terhadap dunia
                teknologi dan ingin mengembangkan diri agar bisa menjadi seorang developer yang handal.

              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>

          {/* Grid 2 */}
          <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
              <p className="flex items-end text-5xl text-gray-500">ERROR IS ART</p>

              <Card style={{ transform: 'rotate(75deg)', top: '30%', left: '20%' }} text="GRASP" containerRef={grid2Container} />
              <Card style={{ transform: 'rotate(-30deg)', top: '60%', left: '45%' }} text="SOLID" containerRef={grid2Container}/>
              <Card style={{ transform: 'rotate(90deg)', bottom: '30%', left: '70%' }} text="Design Patterns" containerRef={grid2Container}/>
              <Card style={{ transform: 'rotate(-45deg)', top: '55%', left: '0%' }} text="Design Principles" containerRef={grid2Container}/>
              <Card style={{ transform: 'rotate(20deg)', top: '10%', left: '38%' }} text="SRP" containerRef={grid2Container}/>
              <Card style={{ transform: 'rotate(30deg)', top: '70%', left: '70%' }} 
                    image="assets/logos/laravel.png" 
                    containerRef={grid2Container}
              />
              <Card style={{ transform: 'rotate(-45deg)', top: '70%', left: '25%' }} 
                    image="assets/logos/github.png" 
                    containerRef={grid2Container}
              />
              <Card style={{ transform: 'rotate(20deg)', top: '10%', left: '38%' }} 
                    image="assets/logos/reactjs.png" 
                    containerRef={grid2Container}
              />
            </div>
          </div>
          {/* Grid 3 */}
            <div className="grid-black-color grid-3">
              <div className="z-10 w-[50%]">
                <p className="headtext">Time Zone</p>
                <p className="subtext">
                  I,M based in Lumajang, East Java, Indonesian. And open to remote work worldwide.
                </p>
                <figure className="absolute left-[30$] right-[10%]">
                  
                </figure>
              </div>
            </div>
          {/* Grid 4 */}
          <div className="grid-special-color grid-4">

          </div>
          {/* Grid 5 */}
            <div className="grid-default-color grid-5   ">

            </div>
        </div>
      </div>
    </section>
  )
}

export default About;
