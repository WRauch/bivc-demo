'use client'
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Docs = () => {
    let[docType, setDocType] = useState("Charters")

    return(

    <div className="min-h-screen rounded-2xl bg-green-900 p-6 text-white md:p-10">
                <div className="flex flex-col gap-2 border-b border-white/20 pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold md:text-4xl">
                            Documents
                        </h1>
                        <p className="mt-2 max-w-xl text-green-100">
                            Browse public documents by category.
                        </p>
                    </div>

                    <div className="w-full md:w-64">
                        <label htmlFor="docselect" className="mb-2 block text-sm font-semibold text-green-100">
                            Document category
                        </label>
                        <select className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm font-medium text-green-950 outline-none focus:ring-2 focus:ring-green-300" id="docselect" value={docType} onChange={(x) => setDocType(x.target.value)}>
            <option value="Charters">Charters</option>
            <option value="Job Descriptions">Job Descriptions</option>
            <option value="By-Laws">By-Laws & Ordinances</option>
            <option value="Forms">Forms</option>
            <option value="Newsletters">Newsletters</option>
            <option value="Policies">Policies</option>
            <option value="Annual Meetings">Annual Meetings</option>
            <option value="Misc">Misc</option>

                        </select>
                    </div>
                </div>

                <div className="pt-6">
                    <p className="text-sm text-green-100">
                        Showing documents in <span className="font-semibold text-white">{docType}</span>
                    </p>
                    {docType === 'Charters' &&

                    <div className="mt-4">
                        <ul className="grid gap-3 md:grid-cols-3">
                            <li>
                                <Link className="block rounded-xl bg-white/10 px-4 py-4 font-semibold transition hover:bg-white/20" to="#">
                                    Planning Board
                                </Link>
                            </li>
                            <li>
                                <Link className="block rounded-xl bg-white/10 px-4 py-4 font-semibold transition hover:bg-white/20" to="#">
                                    Zoning Board of Appeals
                                </Link>
                            </li>
                            <li>
                                <Link className="block rounded-xl bg-white/10 px-4 py-4 font-semibold transition hover:bg-white/20" to="#">
                                    Appointed Committees
                                </Link>
                            </li>
                        </ul>
                    </div>
                    }
                </div>

    </div>


 );
};
export default Docs;