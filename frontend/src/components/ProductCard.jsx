import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
} from '@chakra-ui/react'
import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useProductStore } from '../../store/product'
import { useState } from 'react'

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { deleteProduct, updateProduct } = useProductStore()
	const toast = useToast()

	const textColor = useColorModeValue('gray.700', 'gray.200')
	const bg = useColorModeValue('white', 'gray.800')

	const handleDelete = async (productId) => {
		const { success, message } = await deleteProduct(productId)

		if (!success) {
			toast({
				title: 'Error',
				description: message,
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
		} else {
			toast({
				title: 'Success',
				description: message,
				status: 'success',
				duration: 5000,
				isClosable: true,
			})
		}
	}

	const handleUpdateProduct = async (productId, updatedProduct) => {
		const { success } = await updateProduct(productId, updatedProduct)

		if (!success) {
			toast({
				title: 'Error',
				description: 'Product update failed.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			})
		} else {
			toast({
				title: 'Success',
				description: 'Product updated successfully.',
				status: 'success',
				duration: 5000,
				isClosable: true,
			})

			onClose()
		}
	}

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
			bg={bg}
		>
			<Image
				src={product.image}
				alt={product.name}
				w='full'
				objectFit='cover'
			/>

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
					<IconButton
						icon={<FiEdit3 />}
						colorScheme='blue'
						onClick={onOpen}
					/>
					<IconButton
						icon={<RiDeleteBin5Fill />}
						colorScheme='red'
						onClick={() => handleDelete(product._id)}
					/>
				</HStack>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>

					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) =>
									setUpdatedProduct({
										...updatedProduct,
										name: e.target.value,
									})
								}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) =>
									setUpdatedProduct({
										...updatedProduct,
										price: e.target.value,
									})
								}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) =>
									setUpdatedProduct({
										...updatedProduct,
										image: e.target.value,
									})
								}
							/>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme='tea-green'
							mr={3}
							onClick={() =>
								handleUpdateProduct(product._id, updatedProduct)
							}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default ProductCard
