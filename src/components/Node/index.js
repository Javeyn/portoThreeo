import React from "react";
import Img from './nodegif.gif'

class Node extends React.Component {
    render() {
        return (
            <div>

                <div id="fourth">
                    <div class="story">
                        <div id="node" class="float-right">
                            <h2>GitHub Resume Creator</h2>
                            <img src={Img} alt="spinach shooters demo" />
                            <p>Open your terminal and enter your GitHub username and select a color of your choice to create an
                                HTML resume on the spot.
         </p>
                            <p><a href="javascript: document.body.scrollIntoView(false);" style={{color:'white',float:'left'}}>Click here
                 to go directly to my links</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Node