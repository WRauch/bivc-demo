
import React from "react";
import Nav from "../../nav/page";
import { useState } from "react";

const Planning = () => {

    let[year, setYear] = useState("2023")

    return(

    <div className="text-white">
        <Nav/>

        <div>
            <h1>
                Planning Board
            </h1>
        <div class="row mt-2">

        <div class="col-12 col-lg-6 mt-2">
        <ul class="list-group list-group-mine mt-2">
      <li class="list-group-item">
    <h3 class="center-text">
    Minutes
    </h3>


    <div className="input-group-append float-end">

    <select class="custom-select" id="yearselect" onChange={(x) => setYear(x.target.value)}>
        <option selected value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
    </select>

    </div>
    Minutes from {year}

    </li>
    </ul>
        </div>
        <div class="col-12 col-lg-6 mt-2">

        <div className="center-text">

              <h3 class="center-text">
              Meeting Info              
              </h3>
        Zoom Meeting: &nbsp;
        <a href="https://us02web.zoom.us/j/82141859093?pwd=ejJtT0Qzc1VsQUpWMmYrb2JHNGhZUT09">Link</a> 
        <br/>Meeting ID: 821 4185 9093 <br/> Passcode: 910491
        </div>
        </div>
    </div>
</div>
</div>


 );
};
export default Planning;

<div class="col-12 col-lg-6 mt-2">

<br/>
Planning Board
<br/>

</div>