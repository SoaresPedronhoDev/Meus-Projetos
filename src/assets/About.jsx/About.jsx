import React from 'react';
import '../Styles/aboutStyle.css'


function About(props) {

  return (
    <>
      <div className="About fade-in">
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
