import Link from 'next/link';
import React from 'react';

function principalOfficers() {
	return (
		<>
			<div className="page-banner-area bg-2">
				<div className="container">
					<div className="page-banner-content">
						<h1>Principal Officers</h1>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Principal Officers</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="academics-area pt-100 bg-light">
				<div className="container"></div>
			</div>
		</>
	);
}

export default principalOfficers;
