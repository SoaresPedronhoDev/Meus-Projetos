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
           Estudo programação há cerca de um ano. Sempre tive uma paixão por computadores e jogos, então, desde que descobri essa área,
            meu interesse em ingressar nela só aumentou. Atualmente, aos 17 anos, concluí um curso oferecido pelo Programador BR, um canal
             conhecido na área. Mesmo após o término do curso, continuo estudando programação como um hobby e também como uma futura profissão.
              Estou sempre em busca de aprimorar meus conhecimentos, especialmente explorando novas tecnologias
           </div>
        </div>
      </>
  );
}


export default About;
