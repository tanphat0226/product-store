import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
	const { getProducts, products } = useProductStore()

	useEffect(() => {
		getProducts()
	}, [getProducts])

	if (!products) return null

	return (
		<Container maxW={'container.xl'} py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={'30px'}
					fontWeight='bold'
					bgGradient='linear(to-r, half-baked.400, tea-green.400)'
					bgClip='text'
				>
					Current Product
				</Text>

				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 3 }}
					spacing={8}
					w='full'
				>
					{products.map((product) => (
						<ProductCard key={product.name} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text
						fontSize='xl'
						textAlign='center'
						fontWeight='bold'
						color='gray.500'
					>
						No products found. 😓{' '}
						<Link to='/create' color='purple.400'>
							<Text
								as='span'
								color='half-baked.400'
								_hover={{
									textDecoration: 'underline',
								}}
							>
								Create new product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	)
}

export default HomePage
