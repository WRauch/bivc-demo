import { useState } from 'react';


// Probably better to be person oriented instead of group orientd
const overseers = [
  { name: 'Bob Canu', role: 'BIVC Chair' },
  { name: 'Barbera Mysona', role: 'overseer' },
  { name: 'Crawford Taisy', role: 'overseer' },
  { name: 'Jeff Leland', role: 'overseer' },
  { name: 'Julie Koleda Zook', role: 'overseer' },

];

const committees = [
  { name: 'Alex Parker', role: 'Planning Board Chair' },
  { name: 'Riley Carter', role: 'Zoning Board of Appeals Chair' },
  { name: 'Jamie Lee', role: 'Harbor Committee Chair' },
  { name: 'Jordan Ellis', role: 'Fire and Safety Committee Chair' },
];

const contactGroups = [
  'All',
  'Board of Overseers',
  'Committees',
  'Elected and Appointed Officials',
  'Employees and Contractors',
  'Harbor and Water Services',
  'Historical and Nature Organizations',
  'Planning and Zoning',
  'Public Safety and Emergency Contacts',
  'Transportation and Truck Services',
  'Other Contacts',
];

export default function BivcInfo() {
  const [group, setGroup] = useState('All');
    
  return (
    <div className="min-h-screen rounded-2xl bg-green-900 p-6 text-white md:p-10">
      <div className="flex flex-col gap-2 border-b border-white/20 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold md:text-4xl">BIVC Info</h1>
          <p className="mt-2 max-w-xl text-green-100">
            Find the people who help keep BIVC moving.
          </p>
        </div>

        <div className="w-full md:w-72">
          <label htmlFor="contact-group" className="mb-2 block text-sm font-semibold text-green-100">
            Group
          </label>
          <select
            className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm font-medium text-green-950 outline-none focus:ring-2 focus:ring-green-300"
            id="contact-group"
            value={group}
            onChange={(event) => setGroup(event.target.value)}
          >
            {contactGroups.map((contactGroup) => (
              <option key={contactGroup} value={contactGroup}>
                {contactGroup}
              </option>
            ))}
          </select>
        </div>
      </div>

      <section className="pt-6" aria-labelledby="bivc-contacts-heading">
        <h2 id="bivc-contacts-heading" className="text-2xl font-semibold">
          BIVC Contacts
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
            {
                group === 'All' && (
                overseers.concat(committees).map(({ name, role }) => (
                    <div key={name} className="rounded-xl bg-white/10 px-4 py-4">
                        <div className="font-semibold">{name}</div>
                        <div className="mt-1 text-sm text-green-100">{role}</div>
                    </div>
                )) 

                )

            }
            { 
                group === 'Board of Overseers' && overseers.map(({ name, role }) => (
                    <div key={name} className="rounded-xl bg-white/10 px-4 py-4">
                        <div className="font-semibold">{name}</div>
                        <div className="mt-1 text-sm text-green-100">{role}</div>
                    </div>
                )) 
            }
            { 
                group === 'Committees' && committees.map(({ name, role }) => (
                    <div key={name} className="rounded-xl bg-white/10 px-4 py-4">
                        <div className="font-semibold">{name}</div>
                        <div className="mt-1 text-sm text-green-100">{role}</div>
                    </div>
                )) 
            }
          
        </div>
      </section>
    </div>
  );
}