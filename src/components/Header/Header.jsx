import { Button } from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import titleLogo from '../../assets/course.png';

function Header() {
	function onLogout() {
		alert('Dave Logged out!');
	}

	return (
		<header className='pb-3'>
			<div className='d-flex justify-content-between align-items-center p-3 border border-danger rounded'>
				<div>
					<Logo imgSrc={titleLogo} height='50px' />
				</div>
				<div className='d-flex align-items-center'>
					<span className='pe-5'>Dave</span>
					<Button
						name='Logout'
						class='btn btn-info bg-transparent'
						click={() => onLogout()}
					></Button>
				</div>
			</div>
		</header>
	);
}

export default Header;
