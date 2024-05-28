
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const TextShpere = () =>{

    useEffect(() =>{
        return () =>{
            const container = ".tagcloud";
            const texts = [
                'HTML',
                'CSS',    
                'JavaScript',
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
                'React'
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