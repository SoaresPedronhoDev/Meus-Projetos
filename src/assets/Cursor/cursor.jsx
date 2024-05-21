import React, { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.left = event.clientX + "px";
                cursor.style.top = event.clientY + "px";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseOver = () => {
            const cursor = document.querySelector('.cursor');
            cursor.classList.add('hovered');
        };
        
        const handleMouseOut = () => {
            const cursor = document.querySelector('.cursor');
            cursor.classList.remove('hovered');
        };

        const pointer = document.querySelector('.pointer');

        pointer.addEventListener('mouseover', handleMouseOver);
        pointer.addEventListener('mouseout', handleMouseOut);

        return () => {
            pointer.removeEventListener('mouseover', handleMouseOver);
            pointer.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('.pointer');

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

    return <div className="cursor"></div>;
};

export default Cursor;