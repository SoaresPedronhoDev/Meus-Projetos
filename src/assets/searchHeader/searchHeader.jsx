import React, { useState, useEffect } from 'react';
import About from '../About.jsx/About';
import { Link } from "react-scroll";

const SearchHeader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [color, setColor] = useState('black');

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrollThreshold = 700; // Altere conforme necessário
        const color = scrollPosition > scrollThreshold ? 'black' : 'white'; // Alterado para 'white' quando a posição de rolagem excede o limite
        setColor(color);
    }, [scrollPosition]);

    return (
        <div className="searchHeader fade-in">
            <div className="imageHeader">
                <img src="../src/icons/phone.png" alt="Phone icon" className='pointer'></img>
                <h4 style={{color : color}} className='pointer'>Pedro Henrique</h4>
            </div>
            <Link to='About' smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Sobre Mim</p></Link>
            <a href="#"><p style={{color : color}} className='pointer'>Projetos</p></a>
            <a href="#"><p style={{color : color}} className='pointer'>Diplomas</p></a>
        </div>
    );
};

export default SearchHeader;