import React from "react";
import Nav from "../nav";
import { useState } from "react";
import { Link } from "react-router-dom";

const Docs = () => {
    let[docType, setDocType] = useState("Charters")

    return(

    <div className="text-white">
        <Nav/>
        <div>
            <h1>
                Documents
            </h1>
        <div className="input-group-append float-end">


        <select class="custom-select" id="docselect" onChange={(x) => setDocType(x.target.value)}>
            <option selected value="Charters">Charters</option>
            <option value="Job Descriptions">Job Descriptions</option>
            <option value="By-Laws">By-Laws & Ordinances</option>
            <option value="Forms">Forms</option>
            <option value="Newsletters">Newsletters</option>
            <option value="Policies">Policies</option>
            <option value="Annual Meetings">Annual Meetings</option>
            <option value="Misc">Misc</option>

        </select>

        </div>
        You are viewing {docType}
        {docType === 'Charters' && 
        
        <div>
            <ul className="list-group">
                <li className=""><Link>Planning Board</Link></li>
                <li><Link>Zoning Board of Appeals</Link></li>
                <li><Link>Appointed Committees</Link></li>
            </ul>
        </div>
        }

        </div>
    </div>


 );
};
export default Docs;