import { useState, Fragment } from 'react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';

export default function Example() {
	const [open, setOpen] = useState(0);

	const handleOpen = (value: number) => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};

	return (
		<Fragment>
			<Accordion
				open={open === 1}
				animate={customAnimation}
				onClick={() => handleOpen(1)}
			>
				<AccordionHeader>What is Material Tailwind?</AccordionHeader>
				<AccordionBody>
					We&apos;re not always in the position that we want to be at.
					We&apos;re constantly growing. We&apos;re constantly making mistakes.
					We&apos;re constantly trying to express ourselves and actualize our
					dreams.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 2}
				animate={customAnimation}
				onClick={() => handleOpen(2)}
			>
				<AccordionHeader>How to use Material Tailwind?</AccordionHeader>
				<AccordionBody>
					We&apos;re not always in the position that we want to be at.
					We&apos;re constantly growing. We&apos;re constantly making mistakes.
					We&apos;re constantly trying to express ourselves and actualize our
					dreams.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 3}
				animate={customAnimation}
				onClick={() => handleOpen(3)}
			>
				<AccordionHeader>What can I do with Material Tailwind?</AccordionHeader>
				<AccordionBody>
					We&apos;re not always in the position that we want to be at.
					We&apos;re constantly growing. We&apos;re constantly making mistakes.
					We&apos;re constantly trying to express ourselves and actualize our
					dreams.
				</AccordionBody>
			</Accordion>
		</Fragment>
	);
}
