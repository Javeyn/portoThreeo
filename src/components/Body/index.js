import React from "react";

class Body extends React.Component {
    render() {
        return (
        <div>

{/* <script type="text/javascript">
        $(document).ready(
            function () {
            $('#nav').localScroll(800),
            $('#intro').parallax("50%", .05),
            $('#second').parallax("50%", .05),
            $('.bg').parallax("50%", 0.4),
            $('#third').parallax("50%", .05),
            $('.bg').parallax("50%", 0.4),
            $('#fourth').parallax("50%", .05),
            $('.bg').parallax("50%", 0.4),
            $('#fifth').parallax("50%", .05),
            $('.bg').parallax("50%", 0.4)
        });
    </script> */}

    <div id="intro">
        <div class="story">
            <div class="float-left" id="hellocard" class="row">
                <div id="welcome" class="column">
                    <h2>Welcome!</h2>
                    <p>My name is Jack Sorensen, I am currently studying computer science and have built
                        this page to show you some of my
                        favorite created projects and collaborations. Feel free to scroll
                        down and take a peek. At the bottom of the page are all the links
                        to the projects below, as well as contact and additional profile links.
                        Thanks for stopping by, and enjoy!
                    </p>
                </div>
                <div id="skillset" class="column">
                    <h2>Jack's Skillset includes:</h2>
                    <ul>
                        <li>Touchtyping/9key at close to 60WPM</li>
                        <li>Microsoft Office proficiency</li>
                        <li>8+ years Business Management</li>
                        <li>10+ inventory Management</li>
                        <li>15+ years Customer Service</li>
                        <li>Web Design/Development<ul>
                                <li>HTML, CSS, JavaScript</li>
                                <li>Handlebars, Node, Express</li>
                                <li>MySQL, Mongo</li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <p><a href="javascript: document.body.scrollIntoView(false);" style={{color:'white',float:'right'}}>Click here
                        to go directly to my links</a></p>
            </div>
        </div>
    
    </div>
 
   
  
   
   
    </div>
        )
    }
}
export default Body;