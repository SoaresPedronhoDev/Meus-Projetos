import React from "react";
import SearchHeader from "../searchHeader/searchHeader";

function Header(props) {

    return (
        <div className='containerHeader fade-in'>
            {/* <div className="searchHeader">
                <div className="imageHeader">
                    <img src="../src/icons/phone.png" alt="Phone icon"></img>
                    <h4>Pedro Henrique</h4>
                </div>
                <a href="#"><p>Sobre Mim</p></a>
                <a href="#"><p>Projetos</p></a>
                <a href="#"><p>Diplomas</p></a>
            </div> */}
            <SearchHeader/>
            <div className="containtHeader">
                <div className="titleHeader">
                    <div>React</div>
                    <div>Developer</div>
                    <div>FullStack</div>
                </div>
                <div className="cube">
                    <div className="top"></div>
                    <div>
                        <span style={{ transform: "rotateY(90deg) translateZ(150px)" }}></span> {/* Face 0 */}
                        <span style={{ transform: "rotateY(180deg) translateZ(150px)" }}></span> {/* Face 1 */}
                        <span style={{ transform: "rotateY(-90deg) translateZ(150px)" }}></span> {/* Face 2 */}
                        <span style={{ transform: "rotateY(0deg) translateZ(150px)" }}></span> {/* Face 3 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header