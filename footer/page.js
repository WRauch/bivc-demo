import React from 'react';

export default function Footer() {
	return (
		<footer className="border-t border-gray-700 bg-gray-900 text-white">
			<div className="mx-auto grid w-full max-w-6xl px-4 py-8 md:grid-cols-3 md:divide-x md:divide-gray-700">
				<section className="px-0 py-5 first:pt-0 last:pb-0 md:px-6 md:py-0 first:md:pl-0 last:md:pr-0">
					<h2 className="mb-2 text-lg font-semibold">About</h2>
					<p className="text-sm leading-6 text-gray-300">
BIVC – Bustins Island Village Corporation that resides within the territorial boundaries of the Town of Freeport, but is a self-governing entity					</p>
				</section>

				<section className="border-t border-gray-700 px-0 py-5 md:border-t-0 md:px-6 md:py-0">
					<h2 className="mb-2 text-lg font-semibold">Contact</h2>
					<p className="text-sm leading-6 text-gray-300">
Bustins Island Village Corporation
240 US Route 1 Unit B1, #1011
Falmouth, ME 04105

Phone: (207) 417-4798
Email: webmaster@bivc.net

Contact Us					</p>
				</section>

				<section className="border-t border-gray-700 px-0 py-5 last:pb-0 md:border-t-0 md:px-6 md:py-0">
					<h2 className="mb-2 text-lg font-semibold">Meeting Info</h2>
					<p className="text-sm leading-6 text-gray-300">


Board Of Overseers Season Meeting Schedule through 2026

Schedule changes shown under Upcoming Meetings below

Zoom meetings (if used)
Overseers – Meeting ID: 895 7140 3417    Passcode: 385710
Planning Board – Meeting ID: 821 4185 9093    Passcode: 910491					</p>
				</section>
			</div>
		</footer>
	);
}
