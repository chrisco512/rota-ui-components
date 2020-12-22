import { Text, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Icon } from '@chakra-ui/core';

function Breadcrumbs() {
	return (
		<Breadcrumb spacing="8px" separator={<Icon color="gray.300" name="chevron-right" />}>
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
