import {
	Box,
	Button,
	Container,
	Heading,
	Input,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		price: '',
		image: '',
	})

	const handleAddProduct = () => {
		// Logic to handle adding the new product
		console.log('New Product:', newProduct)
		// Reset form
		setNewProduct({ name: '', price: '', image: '' })
	}

	return (
		<Container maxW={'container.sm'}>
			<VStack spacing={8}>
				<Heading as={'h1'} size={'2xl'} textAlign={'center'} mt={8}>
					Create New Product
				</Heading>

				<Box
					w={'full'}
					bg={useColorModeValue('white', 'gray.800')}
					p={6}
					rounded={'lg'}
					boxShadow={'md'}
				>
					<VStack spacing={4}>
						<Input
							placeholder='Product name'
							name='name'
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									name: e.target.value,
								})
							}
						/>
						<Input
							placeholder='Product price'
							name='price'
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									price: e.target.value,
								})
							}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									image: e.target.value,
								})
							}
						/>

						<Button
							onClick={handleAddProduct}
							colorScheme='celadon'
							w={'full'}
							type='submit'
						>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	)
}

export default CreatePage
