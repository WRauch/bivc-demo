'use client'
import React from "react";

import Image from 'next/image'
import logo from "../images/bivc_logo.jpg"
import boat from "../images/lillyb.jpg"
import { useState, useEffect } from 'react';
import Search from '../search';

const Home = () => {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const date = new Date();
  useEffect(() => {
    // Fetch all the data you want to be searchable
    // This could be from an API, static files, etc.
    // For simplicity, we'll use static data here
    const fetchData = async () => {
      const allData = [
        { id: 1, title: 'Next.js Tutorial', content: 'Learn how to use Next.js' },
        { id: 2, title: 'React.js Guide', content: 'A comprehensive guide to React.js' },
        { id: 3, title: 'JavaScript Basics', content: 'Learn the basics of JavaScript' },
        { id: 4, title: 'Advanced Node.js', content: 'Master Node.js with advanced concepts' }
      ];
      setData(allData);
    };
    fetchData();
  }, []);
  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };
 return(

  <div className='flex min-h-screen flex-col items-center rounded-2xl bg-gray-500 p-6'>
    <Image src={logo} alt="logo" className="w-600"/>

    <div className='mt-6 flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center'>
      <div className='flex w-full max-w-[700px] flex-col justify-center rounded-2xl bg-green-900 p-6 text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]'>
        <h1 className='mb-5 text-center text-[clamp(1.5rem,2vw,2.25rem)] font-bold'>
          Today is: {Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}, {date.toLocaleDateString()} Time: {date.toLocaleTimeString()}
        </h1>

        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='flex-1 rounded-xl bg-white/5 p-4'>
            <h2 className='mb-3 text-xl font-semibold'>Boat Schedule</h2>
            <ul className='m-0 flex list-none flex-col gap-3 p-0'>
              <li className='rounded-xl bg-white/10 px-3.5 py-3'>
                To Bustins: 8:00AM
                <br />
                From Bustins: 8:40AM
              </li>
              <li className='rounded-xl bg-white/10 px-3.5 py-3'>
                To Bustins: 11:00AM
                <br />
                From Bustins: 11:40AM
              </li>
              <li className='rounded-xl bg-white/10 px-3.5 py-3'>
                To Bustins: 3:00PM
                <br />
                From Bustins: 3:40PM
              </li>
                            <li className='rounded-xl bg-white/10 px-3.5 py-3'>
                To Bustins: 5:00PM
                <br />
                From Bustins: 5:40PM
              </li>
            </ul>
          </div>

          <div className='flex-1 rounded-xl bg-white/5 p-4'>
            <h2 className='mb-3 text-xl font-semibold'>Event Schedule</h2>
            <ul className='m-0 flex list-none flex-col gap-3 p-0'>
              <li className='rounded-xl bg-white/10 px-3.5 py-3'>
                Trash Pickup
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex w-full max-w-[500px] justify-center md:w-[42%]'>
        <Image src={boat} alt="boat" className='w-full rounded-2xl object-cover shadow-[0_10px_25px_rgba(0,0,0,0.12)]' />
      </div>
    </div>

  </div>

 );
};
export default Home;