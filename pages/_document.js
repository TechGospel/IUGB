/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

function _document() {
	return (
		<Html>
			<Head>
				<link rel="stylesheet" href="assets/css/bootstrap.min.css" />

				<link rel="stylesheet" href="assets/css/meanmenu.css" />

				<link rel="stylesheet" href="assets/css/magnific-popup.css" />

				<link rel="stylesheet" href="assets/css/flaticon.css" />

				<link rel="stylesheet" href="assets/css/remixicon.css" />

				<link rel="stylesheet" href="assets/css/style.css" />

				<link rel="stylesheet" href="assets/css/dark.css" />

				<link rel="stylesheet" href="assets/css/responsive.css" />
				<link rel="favicon" type="image/png" href="/logo.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<script src="assets/js/jquery.min.js"></script>

				<script src="assets/js/bootstrap.bundle.min.js"></script>

				<script src="assets/js/jquery.meanmenu.js"></script>

				{/*<script src="assets/js/carousel-thumbs.min.js"></script>*/}

				<script src="assets/js/jquery.magnific-popup.js"></script>

				<script src="assets/js/appear.min.js"></script>

				<script src="assets/js/form-validator.min.js"></script>

				<script src="assets/js/contact-form-script.js"></script>

				<script src="assets/js/ajaxchimp.min.js"></script>

				<script src="assets/js/custom.js"></script>
			</body>
		</Html>
	);
}

export default _document;
