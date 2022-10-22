//UI imports
import { Button } from '@material-tailwind/react';

//Types
type Props = {
	className: string;
};

function ButtonComponent({
	className,
	Children,
}: {
	className: string;
	Children: any;
}) {
	return <Button className={className}>{Children}</Button>;
}

export default ButtonComponent;
