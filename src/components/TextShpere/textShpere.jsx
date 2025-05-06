
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import '../TextShpere/tagCloud.css'

const TextShpere = () =>{


//Codigo para fazer a nuvem de palavras funcionar

    useEffect(() =>{
        return () =>{
            const container = ".tagcloud";
            const texts = [
                'HTML',
                'CSS',    
                'JavaScript',
                'TypeScript',
                'Bootstrap',
                'Node',
                'Mongo',
                'Firebase',
                'Electron',
                'GIT',
                'GITHUB',
                'JQuery',
                'BYcrypt',
                'Socket.io',
                'React',
                'Tailwind',
                'Next.js',
                'Express', 
            ];
                const options = {
                    radius : 300,
                    maxSpeed : 'normal',
                    initSpeed : "normal",
                    keep : true,
                };
                TagCloud(container,texts,options)
        }
    },[])

    return(
    <div className="text-shpere">
        <span className="tagcloud"></span>
    </div>
    );
};

export default TextShpere