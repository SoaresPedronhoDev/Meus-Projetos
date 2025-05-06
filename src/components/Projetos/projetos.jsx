import {useEffect} from "react";
import "../Projetos/projetosStyle.css"
import Header from "../Header/header"

import { Link } from "react-scroll";

import AOS from 'aos'
import 'aos/dist/aos.css';


function Projetos(){

    useEffect(() =>{
        AOS.init({duration: 2000})
    },{})

    return(
    <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="About fade-in projetos">
        <div className="trabalhos">
            <hr/>
            <div className="box-projetos">
                <img src="/assets/icons/spotify.png" alt="Spotify Clone" />
                <span className="box-text">Neste projeto, desenvolvi um clone do aplicativo Spotify com o objetivo de aprimora
                    r minhas habilidades em desenvolvimento de interfaces e, ao mesmo tempo, demonstrar minha capacidade de organização
                     e estruturação de projetos. O foco principal foi apresentar uma arquitetura limpa, com uma divisão clara de pastas,
                      componentes e recursos, facilitando a manutenção e a escalabilidade do código. Além disso, procurei aplicar boas práticas
                       no tratamento de arquivos e na reutilização de componentes, visando um código mais eficiente, legível e de fácil compreensão
                        por outros desenvolvedores.<a href="https://github.com/SoaresPedronhoDev/Spotify-Clone">Clique aqui para ver o projeto</a></span>
            </div>
            <hr/>
            <div className="box-projetos">
                <img src="/assets/icons/coming-soon.jpg" alt="Em Breve" />
                <span className="box-text">Em Breve</span>
            </div>
        </div>
        <Link className='header-link' to='Header' smooth={true} duration={1000}><p>Voltar ao Topo</p></Link>
    </div>)

}

export default Projetos