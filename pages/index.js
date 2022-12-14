import Head from 'next/head';
import Image from 'next/image';
//import Counter from '../components/counter';
import OwlCarousel from '../components/OwlCarousel';
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
//import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Banner />

			<MainContent />
		</>
	);
}
