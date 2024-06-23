import React, { useEffect } from 'react';
import '../Header/styleHeader.css'
import '../Header/cubeHeaderStyle.css'

import AOS from 'aos'
import 'aos/dist/aos.css';

function Header(props) {

    useEffect(() =>{
        AOS.init({duration: 2000})
    },{})

    return (
        <div className='containerHeader fade-in'>
            <div data-aos="zoom-im" data-aos-offset = " 200 " data-aos-easing = " facilidade no seno " data-aos-duration = " 600 "   className="containtHeader">
                <div className="titleHeader pointer">
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

export default Header;