import React from "react";
import Nav from "../../nav/page";
import { useState } from "react";

const Overseers = () => {

    let[year, setYear] = useState("2023")

    return(

    <div className="text-white">
        <Nav/>

        <div>
            <h1>
                Board of Overseers
            </h1>
        <div class="row mt-2">


        <div class="col-12 col-lg-6 mt-2">
            <ul className="list-group list-group-mine">
                <li className="list-group-item">
                    Elected Officials 
                    <div className="float-end">
                        Term Ends
                    </div>
                </li>
                <li className="list-group-item">
                Amanda Meyer (Chair)
                <div className="float-end">
                    2024
                </div>
                <br/>
                <ul className="fs-6">
                9198 East 25th Drive Denver, CO 80238 <br/>
                303-717-8763 (C) <br/>
                mandy.meyer@bivc.net
                </ul>

                </li>
                <li className="list-group-item">
                Craig Allard
                <div className="float-end">
                    2025
                </div>
                <ul className="fs-6">
                56 Little River Road Kingston, NH 03848
                    <br/>781-838-0256 (C) <br/>
                    craig.allard@bivc.net
                </ul>
                </li>
                <li className="list-group-item">
                Ali Bushman 
                <div className="float-end">
                    2025
                </div>
                <ul className="fs-6">
                101 Harbor Greene Dr. Unit 503 Bellevue, KY 41073 <br/>
                513-478-3520 (C) <br/>
                ali.bushman@bivc.net              
                </ul>
                </li>

                <li className="list-group-item">
                Chris Zook
                <div className="float-end">
                    2026
                </div>
                <ul className="fs-6">
                1670 Sandpiper Bay Loop Dumfries, VA 22026 <br/>
                540-476-1721(C) <br/>
                chris.zook@bivc.net         
                </ul>
                </li>

                <li className="list-group-item">
                Bob Canu
                <div className="float-end">
                    2026
                </div>
                <ul className="fs-6">
                89 Temple Street Gardner, MA 01440 <br/>
                978-632-6515 (H), 978-430-4306 (C) <br/>
                bob.canu@bivc.net    
                </ul>
                </li>

                <li className="list-group-item">
                Kevin Petrie (Clerk)
                <div className="float-end">
                    2024
                </div>
                <ul className="fs-6">
                76 Christopher Road N. Yarmouth, ME 04097 <br/>
                207-645-1141 <br/>
                clerk@bivc.net 
                </ul>
                </li>

                <li className="list-group-item">
                Jason Sweatt (Treasurer)
                <div className="float-end">
                    2024
                </div>
                <ul className="fs-6">
                Bustins Island Village Corporation <br/>
                240 US Route 1 Unit B1 #1011
                Falmouth, ME 04105 <br/>
                207-417-4798 (C) <br/>
                treasurer@bivc.net
                </ul>
                </li>
            </ul>
        </div>

        <div class="col-12 col-lg-6 mt-2">

        <div className="center-text">

              <h3 class="center-text">
              Meeting Schedule              
              </h3>
          2023 Schedule: &nbsp;
        <a href="docs/Seasonal/Meeting%20Schedule.pdf">Board Of Overseers Meeting Schedule</a>
        <br/>

        Zoom Meeting: &nbsp;
        <a href="https://us02web.zoom.us/j/89571403417?pwd=QzFEZXVCT1ZUWlBLdEU0Wmt2RTBndz09"> 
        Link </a> - Meeting ID: 895 7140 3417 <div>Passcode: 385710 </div>
        <a href="docs/Seasonal/Off Season Meetings.pdf">Off Season Overseers Meeting Announcement</a>

        </div>

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
    </div>
</div>
</div>


 );
};
export default Overseers;