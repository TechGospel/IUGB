/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import dynamic from 'next/dynamic';
import Footer from './Footer';
import Header from './Navbar';
import Head from 'next/head';

function Layout({ children }) {
	//const Header = dynamic(import('./Navbar'), { ssr: false });
	return (
		<>
			<Head>
				<title>l'Institut Universitaire le Grand Berger</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
