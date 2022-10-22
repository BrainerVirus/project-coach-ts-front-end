//React imports
import { useState } from 'react';
//Assets
import img from '../assets/img/logos/Nasus coaching logo.png';
import nasusBanner4k from '../assets/img/banners/nasus_worldBreaker_4k.jpg';
//Components
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
//ts imports
import { image } from '../types/interfaces';

function Home() {
	const [imgArray, setImgArray] = useState<image[]>([]);
	return (
		<>
			<div className='flex-container flex-1 justify-evenly gap-4'>
				<div className='flex-container relative h-full w-full justify-center'>
					<div className='flex-container absolute h-full w-full flex-col justify-center gap-4 bg-semiTansparent 4xl:gap-7'>
						<h1 className='justify-left text-step-4 font-bold shadow-black lg:text-step-5'>
							Nasus Coaching
						</h1>
						<p className='justify-left text-step--1  italic shadow-black'>
							"Comprende, aprende, y sorprende"
						</p>
					</div>
					<img
						src={nasusBanner4k}
						className='max-h-[100vh] min-w-[100vw]'
					></img>
					<div className='custom-shape-divider-bottom-1661229558'>
						<svg
							data-name='Layer 1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1200 120'
							preserveAspectRatio='none'
							className='max-h-[35px] lg:max-h-[57px]'
						>
							<path
								d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
								opacity='.25'
								className='shape-fill'
							></path>
							<path
								d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
								opacity='.5'
								className='shape-fill'
							></path>
							<path
								d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
								className='shape-fill'
							></path>
						</svg>
					</div>
				</div>
				<div className='flex-container w-full justify-center gap-10 py-10 4xl:h-screen'>
					<h2 className='text-center font-bold shadow-black'>Presentación</h2>
					<div className='flex-container w-4/5'>
						<iframe
							className='aspect-video w-full lg:max-w-4xl'
							src='https://www.youtube.com/embed/7gkG3LzUnYQ'
							frameBorder='0'
							allow='autoplay; fullscreen'
						></iframe>
					</div>
				</div>
				<div className='flex-container relative w-full justify-center gap-10 bg-secondary py-20 4xl:h-screen'>
					<div className='custom-shape-divider-top-1661229387'>
						<svg
							data-name='Layer 1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1200 120'
							preserveAspectRatio='none'
							className='max-h-[35px] lg:max-h-[57px]'
						>
							<path
								d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
								opacity='.25'
								className='shape-fill'
							></path>
							<path
								d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
								opacity='.5'
								className='shape-fill'
							></path>
							<path
								d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
								className='shape-fill'
							></path>
						</svg>
					</div>
					<h2 className='w-full text-center font-bold shadow-black'>
						¿Cómo funciona?
					</h2>
					<div className='flex-container w-4/5 gap-10 lg:flex-row lg:justify-center'>
						<Card
							img={img}
							title='Learn'
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
							}
						/>
						<Card
							img={img}
							title='Review VOD'
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
							}
						/>
						<Card
							img={img}
							title='Rank up'
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
							}
						/>
					</div>
					<div className='custom-shape-divider-bottom-1661229558'>
						<svg
							data-name='Layer 1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1200 120'
							preserveAspectRatio='none'
							className='max-h-[35px] lg:max-h-[57px]'
						>
							<path
								d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
								opacity='.25'
								className='shape-fill'
							></path>
							<path
								d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
								opacity='.5'
								className='shape-fill'
							></path>
							<path
								d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
								className='shape-fill'
							></path>
						</svg>
					</div>
				</div>
				<div className='flex-container w-3/4 justify-center gap-10 py-10 4xl:h-screen'>
					<h2 className='text-center font-bold shadow-black'>
						Preguntas Frecuentes
					</h2>
					<Accordion />
				</div>
			</div>
		</>
	);
}

export default Home;
