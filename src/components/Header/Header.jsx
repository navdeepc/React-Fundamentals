import { Button } from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import titleLogo from '../../assets/course.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ user, tokenVal, logout }) {
	function onLogout() {
		logout();
	}

	return (
		<header className='pb-3'>
			<div className='d-flex justify-content-between align-items-center p-3 border border-danger rounded'>
				<div>
					<Logo imgSrc={titleLogo} height='50px' />
				</div>
				{tokenVal && Object.keys(user).length > 0 && (
					<div className='d-flex align-items-center'>
						<span className='pe-5'>{user?.name || ''}</span>
						<Button
							name='Logout'
							class='btn btn-info bg-transparent'
							click={() => onLogout()}
						></Button>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
