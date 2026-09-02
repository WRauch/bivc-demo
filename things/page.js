'use client'
import React from "react";

import Image from 'next/image'
import logo from "../images/bivc_logo.jpg"
import boat from "../images/lillyb.jpg"
import truck from "../images/bivc-truck.jpg"
import { useState, useEffect } from 'react';
import Search from '../search';

const Home = () => {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(null);
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

    const dateTimer = window.setTimeout(() => setDate(new Date()), 0);
    return () => window.clearTimeout(dateTimer);
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
          {date
            ? `Today is: ${Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}, ${date.toLocaleDateString()} Time: ${date.toLocaleTimeString()}`
            : 'Loading current date and time...'}
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

    <div className='mt-6 grid w-full max-w-5xl gap-6 md:grid-cols-3'>
      <div className='rounded-2xl bg-green-900 p-6 text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]'>
        <h2 className='mb-4 text-xl font-semibold'>Truck Service</h2>
        <div className='flex flex-col gap-6'>
          <div className='flex w-full justify-center'>
            <Image src={truck} alt="truck" className='aspect-video w-full rounded-2xl object-cover shadow-[0_10px_25px_rgba(0,0,0,0.12)]' />
          </div>

          <div className='w-full space-y-5 rounded-xl bg-white/10 p-5 text-base leading-7'>
            <div className='space-y-2'>
              <p>Truck Service starts Friday, May 15, 2026.</p>
              <p>Trash pickup service will start on Monday, May 25, 2026.</p>
            </div>

            <ul className='list-disc space-y-2 pl-5'>
              <li>
                <a href="https://bivc.net/wp-content/uploads/2023/08/120-Trash-Disposal-Policy.pdf" className="underline" target="_blank" rel="noopener noreferrer">
                  Trash Disposal Policy
                </a>
              </li>
              <li>
                <a href="https://bivc.net/wp-content/uploads/2023/08/Trash-Fee-Rates.pdf" className="underline" target="_blank" rel="noopener noreferrer">
                  Trash Fee Rates
                </a>
              </li>
              <li>
                <a href="https://bivc.net/wp-content/uploads/2023/08/Household-Trash-Pickup.pdf" className="underline" target="_blank" rel="noopener noreferrer">
                  Household Trash Pickup Guidelines
                </a>
              </li>
            </ul>

            <p>Phone: 207-233-8368</p>
          </div>
        </div>
      </div>

      <div className='rounded-2xl bg-green-900 p-6 text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]'>
        <h2 className='mb-3 text-xl font-semibold'>Weather</h2>
        <p className='rounded-xl bg-white/10 px-3.5 py-3'>Stub forecast: sunny, 72°F, with a light breeze.</p>
      </div>

      <div className='rounded-2xl bg-green-900 p-6 text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]'>
        <h2 className='mb-3 text-xl font-semibold'>Island Resources</h2>
        <p className='rounded-xl bg-white/10 px-3.5 py-3'>The library and recycling station are open today.</p>
      </div>
    </div>

  </div>

 );
};
export default Home;