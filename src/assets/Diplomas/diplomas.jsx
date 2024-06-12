import React, { useEffect } from "react";
import TextShpere from "../components/textShpere";
import '../Styles/diplomasStyles.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Diplomas(props) {

  useEffect(() =>{
    AOS.init({duration: 2000})
},{})


  return (
    <div data-aos="fade-up" data-aos-offset = " 200 " data-aos-easing = " facilidade no seno " data-aos-duration = " 600 " className="Diplomas">
      <TextShpere />
     </div>
  );
}

export default Diplomas;

