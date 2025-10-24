import {
	Button,
	Container,
	Flex,
	HStack,
	Text,
	useColorMode,
} from '@chakra-ui/react'
import { CiSquarePlus } from 'react-icons/ci'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Container maxW={'1140px'} px={4}>
			<Flex
				h={16}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexDir={{
					base: 'column',
					sm: 'row',
				}}
			>
				<Text
					fontSize={{ base: '22', md: '28' }}
					fontWeight={'bold'}
					textTransform={'uppercase'}
					textAlign={'center'}
					bgGradient={'linear(to-r, tea-green.400, half-baked.500)'}
					bgClip={'text'}
				>
					<Link to={'/'}>Product Store 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={'center'}>
					<Link to={'/create'}>
						<Button>
							<CiSquarePlus size={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === 'light' ? <IoMoon /> : <IoSunny />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	)
}

export default Navbar
