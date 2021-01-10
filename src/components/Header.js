import React from 'react';
import logo from '../assets/Leonore-logo.png';

function Header() {
	return (
		<div>
			<div className='no-print'>
				<img src={logo} alt='logo' />
			</div>
		</div>
	);
}

export default Header;
