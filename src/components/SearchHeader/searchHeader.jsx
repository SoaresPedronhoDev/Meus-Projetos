import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import '../SearchHeader/searchStyle.css'

//Biblioteca para icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPhone);

const SearchHeader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [color, setColor] = useState('black');
    const [deviceType, setDeviceType] = useState('');

//Hook para pegar o scrool do site
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

    //Hook que determina o tamanho das medidas para troca de cores
    useEffect(() => {
        const determineDeviceType = () => {
            let newDeviceType = '';

            if (window.innerWidth <= 767) {
                newDeviceType = 'mobile';
            } else if (window.innerWidth <= 991) {
                newDeviceType = 'tablet-small';
            } else if (window.innerWidth <= 1199) {
                newDeviceType = 'tablet';
            } else if (window.innerWidth <= 1399) {
                newDeviceType = 'notebook';
            } else {
                newDeviceType = 'desktop';
            }

            setDeviceType(newDeviceType);
        };

        determineDeviceType();

        window.addEventListener('resize', determineDeviceType);

        return () => {
            window.removeEventListener('resize', determineDeviceType);
        };
    }, []);

//Hooks que alteram a cor de acordo com as medidas
    useEffect(() => {
        let newColor;

        if (deviceType === 'mobile') {
            const scrollThresholdMobile = 734;
            const scrollThresholdMobile2 = 1438;
            const scrollThresholdMobile3 = 2892;

            if (scrollPosition > scrollThresholdMobile3) {
                newColor = 'black';
            } else if (scrollPosition > scrollThresholdMobile2) {
                newColor = 'white';
            } else if (scrollPosition > scrollThresholdMobile) {
                newColor = 'black';
            } else {
                newColor = 'white';
            }
        } 

        else if(deviceType === 'tablet-small'){

            const scrollThresholdTabletSmall = 956
            const scrollThresholdTabletSmall2 = 1948
            const scrollThresholdTabletSmall3 = 3932

            if(scrollPosition > scrollThresholdTabletSmall3){
                newColor = 'black'
            }else if(scrollPosition > scrollThresholdTabletSmall2){
                newColor = 'white'
            }else if(scrollPosition > scrollThresholdTabletSmall){
                newColor = 'black'
            }else{
                newColor = 'white'
            }
        }
        
        else if(deviceType === 'tablet'){

            const scrollThresholdTablet = 1164
            const scrollThresholdTablet2 = 2364
            const scrollThresholdTablet3 = 4760


            if(scrollPosition > scrollThresholdTablet3){
                newColor = 'black'
            }else if(scrollPosition > scrollThresholdTablet2){
                newColor = 'white'
            }else if(scrollPosition > scrollThresholdTablet){
                newColor = 'black'
            }else{
                newColor = 'white'
            }
        }

        else if(deviceType === 'notebook'){

            const scrollThresholdNotebook = 1359
            const scrollThresholdNotebook2 = 2763
            const scrollThresholdNotebook3 = 5558


            if(scrollPosition > scrollThresholdNotebook3){
                newColor = 'black'
            }else if(scrollPosition > scrollThresholdNotebook2){
                newColor = 'white'
            }else if(scrollPosition > scrollThresholdNotebook){
                newColor = 'black'
            }else{
                newColor = 'white'
            }
        }
            else {
                const scrollThreshold = 700;
                const scrollThreshold2 = 1438;
                const scrollThreshold3 = 2892;
    
                if (scrollPosition > scrollThreshold3) {
                    newColor = 'black';
                } else if (scrollPosition > scrollThreshold2) {
                    newColor = 'white';
                } else if (scrollPosition > scrollThreshold) {
                    newColor = 'black';
                } else {
                    newColor = 'white';
                }
            }
    
            setColor(newColor);
        }, [deviceType, scrollPosition]);

    return (
        <div className="searchHeader fade-in">
            <div className="imageHeader">
                <a href="tel:+5511985268428" className='link-telefone'>
                <FontAwesomeIcon icon="phone" className="bounce image" bounce />
                <h4 style={{color : color}} className='pointer'>Pedro Henrique</h4>
                </a>
            </div>
            <Link className='pointer' to='About' activeClass="animation-loading" smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Sobre Mim</p></Link>
            <Link className='pointer' to='Diplomas' activeClass="animation-loading" smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Diplomas</p></Link>
            <Link className='pointer' to='Projetos' activeClass="animation-loading" smooth={true} duration={1000}><p style={{color : color}} className='pointer'>Projetos</p></Link>

        </div>
    );
};

export default SearchHeader;