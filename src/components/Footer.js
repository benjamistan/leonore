import React from 'react';

function Footer() {
	return (
		<div classname='no-print' style={{ paddingTop: '70px' }}>
			&#169; {new Date().getFullYear()} Benjamin Stanley
		</div>
	);
}

export default Footer;
