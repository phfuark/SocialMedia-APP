import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const get_username_from_url = () =>{
  
}

const UserDatails = () => {
  return (
    <VStack w={'100%'} alignItems={'start'} gap={'40px'}>
      <Heading>@ph</Heading>
      <HStack gap={'20px'}>
        <Box boxSize={'150px'} border={'2px solid'} borderColor={'gray.700'} bg={'white'} borderRadius={'full'} overflow={'hidden'}>
          <Image src="" boxSize={'100%'} objectFit={'cover'}/>
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
  return (
    <Flex w={'100%'} justifyContent={'center'}>
      <VStack w='75%'>
        <Box w={'100%'} mt={'40px'}>
          <UserDatails/>
        </Box>
      </VStack>
    </Flex>
  );
};

