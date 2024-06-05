import React, { useState, useEffect } from 'react';
import '../Styles/contactStyle.css'

const ContactMe = () => {
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
        const scrollThreshold = 60;
        const scrollThreshold2 = 820;
        const scrollThreshold3 = 2256;

        let color;

        if(scrollPosition > scrollThreshold3){
            color = 'black';
        }else if(scrollPosition > scrollThreshold2){
            color = 'white';
        }else if(scrollPosition > scrollThreshold){
            color = 'black';
        } else{
            color = "white"
        }
        setColor(color);    }, [scrollPosition]);


    return (
        <div className='contactMe pointer'>
                <a style={{color : color}} href={"mailto:pedrohenriquedevprog@gmail.com"}>Contate-Me</a>
             </div>
    );
};

export default ContactMe;