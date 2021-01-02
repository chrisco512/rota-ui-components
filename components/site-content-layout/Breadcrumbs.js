import { Text, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Box } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

function Breadcrumbs() {
	return (
		<Breadcrumb spacing="8px" separator={<Box color="gray.300" as={FaChevronRight} />}>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">
					<Text fontFamily="book" color="outline.500">
						Home
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="/about">
					<Text fontFamily="book" color="outline.500">
						Technology
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href="/contact">
					<Text fontFamily="book" color="outline.500">
						Crypto Chat II
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}

export default Breadcrumbs;
