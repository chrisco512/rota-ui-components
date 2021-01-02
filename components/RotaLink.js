import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export default function MyLink(props) {
	const { children, href, ...rest } = props;

	return (
		<NextLink href={href} passHref>
			<Link {...rest}>{children}</Link>
		</NextLink>
	);
}
