/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>l'Institut Universitaire le Grand Berger</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
