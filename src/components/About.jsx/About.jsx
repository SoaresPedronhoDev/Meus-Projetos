import {useEffect} from 'react';

//Biblioteca AOS para animcao 
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../About.jsx/aboutStyle.css'


function About(props) {

  useEffect(() =>{
    AOS.init({duration: 2000})
},{})

  return (
    <>
      <div data-aos="fade-up" data-aos-offset = " 200 " data-aos-easing = " facilidade no seno " data-aos-duration = " 600 "  className="About fade-in">
           <div className='aboutTitle pointer'>
           <hr></hr>
           Me chamo Pedro e estou em busca da minha <span>primeira</span> vaga como programador
           </div>
           <div className='aboutMe pointer'>
           <div className='aboutMeTitle pointer'><b>Sobre Mim</b></div>
           Estudo programação há cerca de dois anos. Sempre tive uma paixão por computadores
           , então, quando descobri a área, amei logo de cara. Atualmente, aos 18 anos, tenho um 
           curso de Front-End Full Stack e estou no segundo semestre de Análise e Desenvolvimento de Sistemas. 
           Estudo programação tanto como um hobby quanto como uma futura profissão.
           </div>
        </div>
      </>
  );
}


export default About;
