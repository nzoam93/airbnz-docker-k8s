import githubImgAsset from "../../Assets/images/github.png"
import linkedInImgAsset from "../../Assets/images/linkedIn.png"
import { useState } from "react";
import "./Footer.css"



const Footer = () => {
    /*Just for fun. Makes the whole document spin if you click this*/
    const [newClass, setNewClass] = useState(true);
    const root = document.getElementById('root');
    const addSpinClass =() => {
       setNewClass( prevState => !prevState);
       if(newClass){
            root.className = "spin-content"
            document.getElementById("spinner-button").innerHTML = "Why did you click?";
       }
       else {
        root.className = ""
       }
    }
    /*Just for fun. Makes the whole document spin if you click this*/

    /*Scavenger Hunt*/
    // const scavengerHuntLinkedinTask = () => {
    //     document.getElementById("scavenger-linkedin-task").style.color = "green";
    //     // document.getElementById("scavenger-linkedin-task").innerHTML = "green";
    //     document.getElementById("footer-tag").style.color = "green";
    // }
    /*Scavenger Hunt*/

    const githubImg = <img src={githubImgAsset} alt="github"/>
    const linkedInImg = <img src={linkedInImgAsset} alt="github"/>

    return (
        <div className="footer">
            <div id="footer-buttons">
                <a id="github-img" href="https://github.com/nzoam93" target="_blank" rel="noopener noreferrer">{githubImg}</a>
                <a id="linkedin-img" href="https://www.linkedin.com/in/noam-zimet-4114a594" target="_blank" rel="noopener noreferrer">{linkedInImg}</a>
                <button id="spinner-button" className="airbnz-button" onClick={addSpinClass}>Do Not Click! </button>`
            </div>
            <h4 id="footer-tag">Noam Zimet's AirBnB Clone</h4>
        </div>
    )
}

export default Footer;
