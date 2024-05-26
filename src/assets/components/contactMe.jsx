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
        const scrollThreshold = 50; // Altere conforme necessário
        const color = scrollPosition > scrollThreshold ? 'black' : 'white'; // Alterado para 'white' quando a posição de rolagem excede o limite
        setColor(color);
    }, [scrollPosition]);

    return (
        <div className='contactMe pointer'>
                <a style={{color : color}} href={"mailto:pedrohenriquedevprog@gmail.com"}>Contate-Me</a>
             </div>
    );
};

export default ContactMe;