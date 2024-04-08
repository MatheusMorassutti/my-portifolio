import { GitIcon } from "../icons/git-icon";
import { InIcon } from "../icons/in-icon";
import { InstaIcon } from "../icons/insta-icon";
import { TwitterIcon } from "../icons/tw-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="">
                <InstaIcon/>
                </a>
            <a href="">
                <InIcon/>
            </a>
            <a href="">
                <GitIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
           
        </div>
    )
}