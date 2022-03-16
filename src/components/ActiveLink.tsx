import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface Props extends LinkProps {
	children: ReactElement;
	shouldMatchExactHref?: boolean;
}

function ActiveLink({
	shouldMatchExactHref = false,
	children,
	...rest
}: Props) {
	let isActive = false;
	const { asPath } = useRouter();

	const isPathTheExactHref = asPath === rest.href || asPath === rest.as;

	const isPathStartingWithHref =
		asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as));

	if (shouldMatchExactHref && isPathTheExactHref) isActive = true;

	if (!shouldMatchExactHref && isPathStartingWithHref) isActive = true;

	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? 'pink.400' : 'gray.50',
			})}
		</Link>
	);
}

export default ActiveLink;
