import React, { useEffect,useRef } from "react";

function Header(props) {

    // verificando o cursor
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.style.left = event.pageX + "px";
                cursor.style.top = event.pageY + "px";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])
    
    // animação ponteiro hover
    useEffect(() => {
        const links = document.querySelectorAll('.searchHeader > a, .imageHeader > h4, .titleHeader > div');

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                const cursor = document.querySelector('.cursor');
                cursor.style.transform = 'scale(4)';
            });

            link.addEventListener('mouseout', () => {
                const cursor = document.querySelector('.cursor');
                cursor.style.transform = 'none';
            });
        });
    }, []); 

    return (
        <div className='containerHeader fade-in'>
            <div className="searchHeader">
                <div className="imageHeader">
                    <img src="../src/icons/phone.png" alt="Phone icon"></img>
                    <h4>Pedro Henrique</h4>
                </div>
                <a href="#"><p>Sobre Mim</p></a>
                <a href="#"><p>Projetos</p></a>
                <a href="#"><p>Diplomas</p></a>
            </div>
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
            <div className="cursor" ref={cursorRef}></div>
        </div>
    );
}

export default Header