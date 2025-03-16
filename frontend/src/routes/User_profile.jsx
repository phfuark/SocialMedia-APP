import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { get_user_profile_data } from "../api/endpoint";


const UserDatails = ({username}) => {

  useEffect(() =>{

    const fetchData = async () =>{
      const data = await get_user_profile_data(username);
      console.log(data)
    }

    fetchData()
  }, []);

  return (
    <VStack w={'100%'} alignItems={'start'} gap={'40px'}>
      <Heading>@{username}</Heading>
      <HStack gap={'20px'}>
        <Box boxSize={'150px'} border={'2px solid'} borderColor={'gray.700'} bg={'white'} borderRadius={'full'} overflow={'hidden'}>
          <Image boxSize={'100%'} objectFit={'cover'}/>
        </Box>
        <VStack gap={'20px'}>
          <HStack gap={'20px'} fontSize={'18px'}>
            <VStack>
              <Text>Followers</Text>
              <Text>0</Text>
            </VStack>
            <VStack>
              <Text>Follwing</Text>
              <Text>0</Text>
            </VStack>
          </HStack>
          <Button w={'100%'}>Edit Profile</Button>
        </VStack>
      </HStack>
      <Text>Hi, it's ph</Text>
    </VStack>
  );
}

export default function UserProfile(){
  const get_username_from_url = () =>{
    const url_split =  window.location.pathname.split('/');
    return url_split[url_split.length-1]
  }

  const [username, setUsername] = useState(get_username_from_url());

  useEffect(()=>{
    setUsername(get_username_from_url())
  }, []);


  return (
    <Flex w={'100%'} justifyContent={'center'}>
      <VStack w='75%'>
        <Box w={'100%'} mt={'40px'}>
          <UserDatails username={username}/>
        </Box>
      </VStack>
    </Flex>
  );
};

