import React, { useState, useEffect } from 'react';
import '../Styles/contactStyle.css';

const ContactMe = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [color, setColor] = useState('black');
    const [deviceType, setDeviceType] = useState('');

//Hooks que pegam o scroll do site
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

//Hooks que determinam as medidas para troca de cores em diferentes tamanhos
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

//Hooks que trocam de cores em diferentes tamanho de tela
    useEffect(() => {
        let newColor;

        if (deviceType === 'mobile') {
            const scrollThresholdMobile = 50;
            const scrollThresholdMobile2 = 821;
            const scrollThresholdMobile3 = 2352;

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

            const scrollThresholdTabletSmall = 67
            const scrollThresholdTabletSmall2 = 1059
            const scrollThresholdTabletSmall3 = 3040

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

            const scrollThresholdTablet = 64
            const scrollThresholdTablet2 = 1270
            const scrollThresholdTablet3 = 3664


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

            const scrollThresholdNotebook = 67
            const scrollThresholdNotebook2 = 1471
            const scrollThresholdNotebook3 = 4264


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
            const scrollThreshold = 60;
            const scrollThreshold2 = 820;
            const scrollThreshold3 = 2260;

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
        <div className='contactMe pointer'>
            <a style={{ color: color }} href={"mailto:pedrohenriquedevprog@gmail.com"}>Contate-Me</a> 
        </div>
    );
};

export default ContactMe;
