import React from "react";

class Footer extends React.Component {
    render() {
        return (
<div>

 <div id="fifth">
    <div class="story">
        <div class="float-left">
            <div id="contacts">
             <h1>Contact and Links</h1>
             <h2>Please email me at <a href="mailto:jack.sorensen11@gmail.com?subject=Jack, we should meed&body=I would love to get together and chat about your skills, Jack." style={{color:'white'}}>Jack.Sorensen11@gmail.com</a>
             </h2>
             <a href="https://github.com/javeyn" target="_blank" style={{color:'white'}}>Jack's GitHub</a>
             <br/>
             <a href="https://www.linkedin.com/in/jack-sorensen-53810b183/" target="_blank" style={{color:'white'}}>Jack's LinkedIn</a>
            </div>
            
            <div id="ateilinks">
             <a href="http://foodie-helper-2019.appspot.com/" target="_blank" style={{color:'white'}}>Click here to
                 Visit Ate-i</a>
             <br/>
             <a href="https://github.com/Javeyn/project1" target="_blank" style={{color:'white'}}>Click here to visit
                 Ate-i's GitHub Repo</a>
            </div>
         <div id="spinachlinks">
             <a href="https://fathomless-sierra-17852.herokuapp.com/" target="_blank" style={{color:'white'}}>Click
                 here to Play Spinach
                 Shooters</a>
             <br/>
             <a href="https://github.com/Javeyn/projectTwo" target="_blank" style={{color:'white'}}>Click here to
                 visit Spinach Shooter's
                 GitHub Repo</a>
         </div>
         <div id="nodelinks">
             <a href="https://github.com/Javeyn/firstNode" target="_blank" style={{color:'white'}}>Click here to
                 visit firstNode's GitHub Repo</a>
         </div>

     </div>
     <div class="tooltip">
         <img src="style/images/me.jpg" alt="me" style={{height: '500 px',width:'auto',float:'right'}} />

         <span class="tooltiptext">Thanks for visiting!</span>
     </div>
 </div>
 <div id="wildDiv">
     <a href="Resume.pdf" download="Jack Sorensen's Resume" target="_blank">
         <h1 style={{color:'white'}}>Click here to download Jack's Resume</h1>
     </a></div>
</div>
</div>



        )
}}

export default Footer