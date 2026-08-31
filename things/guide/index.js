
import React from "react";
import Nav from "../nav";
import { Link } from "react-router-dom";

const Guide = () => {
    return(

    <div className="text-white">
        <Nav/>

        <h1>
        Owner's And Renter's Guide
        </h1>

        <div class="row mt-2">

<div class="col-12 col-lg-6 mt-2">

        An Owner’s and Renter’s Guide to Bustins Island is an attempt to put on paper 
        information that everyone should know about Bustins and summer life here. 
        The guide was initially proposed by the Cottagers’ Association of Bustins Island (CABI) 
        and has been supported by both the CABI and the Bustins Island Village Corporation (BIVC), 
        but is an independent effort by the authors. It was planned as a sort of “welcome wagon” 
        for new owners and renters, but as it evolved we felt it could be useful to have a copy in 
        every cottage, not only for new owners and renters, but also for existing owners, their family members, 
        and their visitors. Think of this guide as the helpful loose-leaf binder you find in your hotel room – 
        you rarely read it, but pick it up when you want to dial room service or find out where the gym is located. 
        The authors welcome your comments, additions, and/or corrections. While the guide may or may not be 
        reprinted in the future, we do plan to post occasional updates on the BIVC website (www.bivc.net); 
        send comments to the webmaster (bivc.webmaster@gmail.com) and put “Owners Guide” in the subject line.

<br/><br/>
[NOTE: This Guide was written in 2011. A number of things have changed since then. Nonetheless, 
there is much importantant information included. An update to this Guide is in development.]
    </div>

    <div class="col-12 col-lg-6 mt-2">
        <ul className="list-group list-group-mine ">
            <li className="list-group-item">
                <h3 class="center-text">
                    Guide Links
                </h3>

            </li>
            <li className="list-group-item">  
                <div class="center-text">
                <Link>Table of Contents</Link>
                </div>

                <ul>

                    <li>
                    Chapter 1 - <Link>Island Buildings and Resources</Link>

                    </li>
                    <li>
                    Chapter 2 - <Link>Island Vehicles</Link>

                    </li>
                </ul>

                <div class="center-text">
                <Link> Complete Guide</Link>

                </div>
            </li>

        </ul>
    </div>


</div>
</div>
        

 );
};
export default Guide;
