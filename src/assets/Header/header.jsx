import React from 'react';
import Cursor from '../components/cursor';

function Header(props) {

    return (
        <div className='containerHeader fade-in'>
            <div className="containtHeader">
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
            {/* <SearchHeader className='pointer fade-in'/> */}
            <Cursor/>
        </div>
    );
}

export default Header;