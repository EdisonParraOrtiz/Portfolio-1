import React from "react";
import "./styles/home.css";
import './styles/social.css'

const Social = () => {
  return (
    <div className="home__social">
    
        
          <a className="button__content-instagram"
            href="https://www.instagram.com/edison.parr.a/"
            
            target="blank"
          >
            <i class="uil uil-instagram  icono__red-social"></i>
          </a>
        

        
          <a className="button__content-likendin"
            href="https://www.linkedin.com/in/edisonparra/"
          
            target="_blank"
          >
            <i class="uil uil-linkedin  icono__red-social"></i>
          </a>
   
          <a
            className="button__content-github"
            href="https://github.com/EdisonParraOrtiz"
            
            target="_blank"
          >
            <i class="uil uil-github  icono__red-social"></i>
          </a>
       

        
          <a className="button__content-facebook"
            href="https://www.facebook.com/profile.php?id=100008590836927"
          
            target="_blank"
          >
            <i class="uil uil-facebook-f icono__red-social"></i>
          </a>
       
      
    </div>
  );
};

export default Social;
