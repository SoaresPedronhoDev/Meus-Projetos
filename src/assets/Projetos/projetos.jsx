import {useEffect} from "react";
import "../Styles/projetosStyle.css"

import { Link } from "react-scroll";

import AOS from 'aos'
import 'aos/dist/aos.css';


function Projetos(){

    useEffect(() =>{
        AOS.init({duration: 2000})
    },{})

    return(
    <div data-aos="fade-up" data-aos-offset = " 200 " data-aos-easing = " facilidade no seno " data-aos-duration = " 600 "  className="About fade-in projetos">
        <div className="trabalhos">
            <hr/>
            <div className="box-projetos"><img src="../src/icons/coming-soon.jpg"></img><span className="box-text">Em Breve</span></div>
            <hr/>
            <div className="box-projetos"><img src="../src/icons/coming-soon.jpg"></img><span className="box-text">Em Breve</span></div>
            <hr/>
            <div className="box-projetos"><img src="../src/icons/coming-soon.jpg"></img><span className="box-text">Em Breve</span></div>
        </div>
        <Link className='header-link' to='header' smooth={true} duration={1000}><p>Voltar ao Topo</p></Link>
    </div>)

}

export default Projetos