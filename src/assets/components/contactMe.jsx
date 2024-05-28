import React, { useState, useEffect } from 'react';

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
        const scrollThreshold2 = 820
        let color;

        if(scrollPosition > scrollThreshold2){
            color = 'white';
        }else if(scrollPosition > scrollThreshold){
            color = 'black';
        }else{
            color = 'white';
        }   
        setColor(color);    }, [scrollPosition]);


    return (
        <div className='contactMe pointer'>
                <a style={{color : color}} href={"mailto:pedrohenriquedevprog@gmail.com"}>Contate-Me</a>
             </div>
    );
};

export default ContactMe;