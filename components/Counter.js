import dynamic from 'next/dynamic';

import React from 'react';

function Counter({ count }) {
	const Odometer = dynamic(import('react-odometerjs'), {
		ssr: false,
		loading: () => 0,
	});

	return (
		<Odometer
			value={count}
			format="(.ddd),dd"
			duration={10000}
			animation="count"
		/>
	);
}

export default Counter;
