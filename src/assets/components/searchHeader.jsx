import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import Projetos from '../Projetos/projetos';
import '../Styles/searchStyle.css'

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
        const scrollThreshold = 700;
        const scrollThreshold2 = 1438;
        const scrollThreshold3 = 2892

        let color;


        if(scrollPosition >scrollThreshold3){
            color = "black"
        }else if(scrollPosition  > scrollThreshold2){
            color = "white"
        }else if(scrollPosition > scrollThreshold){
            color = "black"
        }else{
            color = "white"
        }
           
        
        setColor(color);
    }, [scrollPosition]);


    return (
        <div className="searchHeader fade-in">
            <div className="imageHeader">
                <img src="../src/icons/phone.png" alt="Phone icon" className='pointer'></img>
                <h4 style={{color : color}} className='pointer'>Pedro Henrique</h4>
            </div>
            <Link className='pointer' to='About' smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Sobre Mim</p></Link>
            <Link className='pointer' to='Diplomas' smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Diplomas</p></Link>
            <Link className='pointer' to='projetos' smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Projetos</p></Link>
        </div>
    );
};

export default SearchHeader;