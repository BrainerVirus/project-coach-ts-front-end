//React imports
import { useState, useEffect } from 'react';
//UI imports
import {
	Navbar,
	MobileNav,
	Typography,
	IconButton,
	Button,
} from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

//Assets imports
import Logo from '../assets/img/logos/logo traparent.svg';
//TS imports
import { NavLinks } from '../types/interfaces';

type Props = {
	ActiveNavLink: NavLinks;
};

export default function NavbarComponent({ ActiveNavLink }: Props) {
	const [openNav, setOpenNav] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const handleOpenNav = () => {
		setOpenNav(!openNav);
	};

	const navList = (
		<ul className='mx-auto mb-4 flex h-full max-h-[60vh] w-full max-w-[85vw] flex-col gap-4 md:max-w-[80%] lg:mb-0 lg:mt-0 lg:h-auto lg:flex-row lg:items-center lg:justify-around lg:gap-28'>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className={
					ActiveNavLink === NavLinks.Inicio
						? 'nav-item p-1 py-[0.7rem] font-normal after:w-full lg:border-none lg:py-0'
						: 'nav-item p-1 py-[0.7rem] font-normal  lg:border-none lg:py-0'
				}
			>
				<div className='flex items-center gap-3  text-white'>
					<a
						href='#'
						className='w-full py-[0.75rem] px-4 text-step--1 font-bold focus:rounded focus:bg-secondary focus:bg-opacity-80 lg:py-0 lg:px-0 lg:text-[16px] lg:text-black lg:focus:bg-transparent'
					>
						INICIO
					</a>
				</div>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className={
					ActiveNavLink === NavLinks.Foro
						? 'nav-item p-1 py-[0.7rem] font-normal  after:w-full lg:border-none lg:py-0'
						: 'nav-item p-1 py-[0.7rem] font-normal  lg:border-none lg:py-0'
				}
			>
				<div className='flex items-center gap-3  text-white'>
					<a
						href='#'
						className=' w-full py-[0.75rem] px-4 text-step--1 font-bold focus:rounded focus:bg-secondary focus:bg-opacity-80 lg:py-0 lg:px-0 lg:text-[16px] lg:text-black lg:focus:bg-transparent'
					>
						FORO
					</a>
				</div>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className={
					ActiveNavLink === NavLinks.About
						? 'nav-item p-1 py-[0.7rem] font-normal   after:w-full   lg:border-none lg:py-0'
						: 'nav-item p-1 py-[0.7rem]   font-normal   lg:border-none lg:py-0'
				}
			>
				<div className='flex items-center gap-3  text-white'>
					<a
						href='#'
						className='w-full py-[0.75rem] px-4 text-step--1 font-bold focus:rounded focus:bg-secondary focus:bg-opacity-80 lg:py-0 lg:px-0 lg:text-[16px] lg:text-black lg:focus:bg-transparent'
					>
						ABOUT
					</a>
				</div>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className={
					ActiveNavLink === NavLinks.Coaching
						? 'nav-item p-1 py-[0.7rem] font-normal   after:w-full   lg:border-none lg:py-0'
						: 'nav-item p-1 py-[0.7rem]   font-normal   lg:border-none lg:py-0'
				}
			>
				<div className='flex items-center gap-3 text-white'>
					<a
						href='#'
						className='w-full py-[0.75rem] px-4 text-step--1 font-bold focus:rounded focus:bg-secondary focus:bg-opacity-80 lg:py-0 lg:px-0 lg:text-[16px] lg:text-black lg:focus:bg-transparent'
					>
						COACHING
					</a>
				</div>
			</Typography>
			{openNav ? (
				<div className='mt-auto flex flex-col gap-4'>
					<Button className='bg-deep-purple-700'>Iniciar Sesión</Button>
					<Button className='bg-deep-purple-700'>Registrase</Button>
				</div>
			) : (
				''
			)}
		</ul>
	);

	const customAnimation = {
		mount: {
			left: '-1px',
			padding: 0,
			margin: 0,
			boxSizing: 'border-box',
			width: '100vw',
		},
		unmount: {
			left: '-100vw',
			display: 'hidden',
			transition: 'left 2s',
		},
	};

	return (
		<Navbar className='lg:py-4b sticky top-0 z-10 w-full min-w-full justify-around rounded-none bg-white bg-opacity-100 py-2 px-4 lg:px-8'>
			<div className=' flex w-full items-center justify-between'>
				<IconButton
					variant='text'
					className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
					ripple={false}
					onClick={handleOpenNav}
				>
					{openNav ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							className='h-6 w-6 text-black'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-black'
							fill='none'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					)}
				</IconButton>
				<div className='container mx-auto flex w-4/5 items-center  text-blue-gray-900 lg:justify-between '>
					<img
						src={Logo}
						alt='logo'
						className='mx-auto max-h-[50px] min-w-[50px] lg:mx-0'
					/>
					<div className='hidden lg:block'>{navList}</div>
					<FontAwesomeIcon icon={faUser} />
				</div>
			</div>
			<MobileNav
				open={openNav}
				animate={customAnimation}
				className='absolute left-[-1px] top-[-1px] min-h-screen w-full max-w-[100vw] bg-primary shadow-xl md:max-w-[50vw] '
			>
				<div className='none flex items-center  bg-white py-[0.8rem] pr-6 text-white shadow-md'>
					<img
						src={Logo}
						alt='logo'
						className='mx-auto max-h-[50px] min-w-[50px]'
					/>
					<Button
						className=' ml-auto flex items-center bg-deep-purple-700 px-2 py-[0.4rem] shadow-xl'
						onClick={handleOpenNav}
					>
						<IconButton
							variant='text'
							className=' h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
							ripple={false}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								className='h-[1.2rem] w-[1.2rem] text-white duration-[0.1s] hover:scale-125 hover:cursor-pointer'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</IconButton>
					</Button>
				</div>
				{navList}
			</MobileNav>
		</Navbar>
	);
}
