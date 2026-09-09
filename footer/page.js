import React from 'react';

export default function Footer() {
	return (
		<footer className="border-t border-gray-00 bg-gray-700 text-white">
			<div className="mx-auto grid w-full max-w-6xl px-4 py-8 md:grid-cols-4 md:divide-x md:divide-gray-300">
				<section className="px-0 py-5 first:pt-0 last:pb-0 md:px-6 md:py-0 first:md:pl-0 last:md:pr-0">
					<h2 className="flex mb-2 text-lg font-semibold justify-center">About</h2>
					<p className="text-sm leading-6 text-gray-300">
						<strong className="text-white">BIVC</strong> is the Bustins Island Village Corporation, a self-governing entity within the territorial boundaries of the Town of Freeport.
					</p>
				</section>

				<section className="border-t border-gray-300 px-0 py-5 md:border-t-0 md:px-6 md:py-0">
					<h2 className="flex mb-2 text-lg font-semibold justify-center">Contact</h2>
					<div className="space-y-3 text-sm leading-6 text-gray-300">
						<address className="not-italic">
							<span className="block text-white">Bustins Island Village Corporation</span>
							<span className="block">240 US Route 1 Unit B1, #1011</span>
							<span className="block">Falmouth, ME 04105</span>
						</address>
						<div>
							<a className="block underline hover:text-white" href="tel:+12074174798">(207) 417-4798</a>
							<a className="block underline hover:text-white" href="mailto:webmaster@bivc.net">webmaster@bivc.net</a>
						</div>
						<a className="inline-block font-medium underline hover:text-white" href="mailto:webmaster@bivc.net">Contact Us</a>
					</div>
				</section>

				<section className="border-t border-gray-300 px-0 py-5 last:pb-0 md:border-t-0 md:px-6 md:py-0">
					<h2 className="flex mb-2 text-lg font-semibold justify-center">Meeting Info</h2>
					<div className="space-y-3 text-sm leading-6 text-gray-300">
						<a className="underline hover:text-white" href="https://bivc.net/wp-content/uploads/2023/08/Seasonal-Meetings.pdf" target="_blank" rel="noopener noreferrer">Board of Overseers season meeting schedule through 2026.</a>
						<p>Schedule changes are shown under Upcoming Meetings.</p>
						<div>
							<p className="mb-1 text-white">Zoom meetings, if used</p>
							<ul className="space-y-1">
								<li><a className="underline hover:text-white" href="https://us02web.zoom.us/j/89571403417?pwd=QzFEZXVCT1ZUWlBLdEU0Wmt2RTBndz09" target="_blank" rel="noopener noreferrer">Overseers</a>: <span className="whitespace-nowrap">895 7140 3417</span> <span className="block">Passcode: 385710</span></li>
								<li><a className="underline hover:text-white" href="hhttps://us02web.zoom.us/j/82141859093?pwd=ejJtT0Qzc1VsQUpWMmYrb2JHNGhZUT09" target="_blank" rel="noopener noreferrer">Planning Board</a>: <span className="whitespace-nowrap">821 4185 9093</span> <span className="block">Passcode: 910491</span></li>
							</ul>
						</div>
					</div>
				</section>

				<section className="border-t border-gray-300 px-0 py-5 last:pb-0 md:border-t-0 md:px-6 md:py-0">
					<h2 className="flex mb-2 text-lg font-semibold justify-center">Local Information</h2>
					<ul className=" space-y-1 text-sm leading-6 text-gray-300">
						<li><a className="underline hover:text-white" href="https://www.freeportmaine.com/" target="_blank" rel="noopener noreferrer">Town of Freeport</a></li>
						<li><a className="underline hover:text-white" href="https://www.maine.gov" target="_blank" rel="noopener noreferrer">State of Maine</a></li>
						<li><a className="underline hover:text-white" href="https://www.usharbors.com/harbor/Maine/South-Freeport-me/tides" target="_blank" rel="noopener noreferrer">Tide Charts South Freeport, ME</a></li>
						<li><a className="underline hover:text-white" href="https://en.wikipedia.org/wiki/Casco_Bay" target="_blank" rel="noopener noreferrer">Casco Bay (Wikipedia)</a></li>
						<li><a className="underline hover:text-white" href="http://www.maineharbors.com/cgi-bin/weather/mhwx.cgi?state=us&forecast=margyx&case=0" target="_blank" rel="noopener noreferrer">Casco Bay Marine Forecast</a></li>
						<li><a className="underline hover:text-white" href="https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Wildfire/Firewise-USA" target="_blank" rel="noopener noreferrer">Firewise USA</a></li>

					</ul>
				</section>
			</div>
		</footer>
	);
}
