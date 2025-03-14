import { Text, Flex, HStack, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

export default function NavBar({ children }){

    const nav = useNavigate();

    const handleNavigate = (route) => {
        nav(`/${route}`)
    } 

    return(
        <Flex bg='blue.600' w='100vw' h='90px' justifyContent={'center'} alignItems={'center'}>
            <HStack w='90%' justifyContent={'space-between'} color={'white'}>
                <Text fontSize={'24px'} fontWeight={'bold'}>Social Hub</Text>
                <HStack>
                    <Text display={'flex'} alignItems={'center'} gap={'10px'} onClick={(route) => handleNavigate('ph')} cursor={'pointer'}fontSize={'24px'} fontWeight={'bold'}>Profile <IoPersonCircleOutline size={'30px'}/> </Text>
                </HStack>
            </HStack>
        </Flex>
    );
}