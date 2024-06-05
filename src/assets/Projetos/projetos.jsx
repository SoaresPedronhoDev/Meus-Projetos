
import React from "react";
import { Link } from "react-scroll";
import "../Styles/projetosStyle.css"


function Projetos(){

    return(
    <div className="projetos">
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