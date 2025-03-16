import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { get_user_profile_data } from "../api/endpoint";
import { SEVER_URL } from "../constants/constants";


const UserDatails = ({username}) => {

  const [loading, setLoading] = useState(true);
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() =>{

    const fetchData = async () =>{
      try{
        const data = await get_user_profile_data(username);
        // console.log(data)
        setBio(data.bio)
        setProfileImage(data.profile_image)
        setFollowerCount(data.follower_count)
        setFollowingCount(data.following_count)
      }catch(error){
        console.log('Can not get data:' + error)
      }finally{
        setLoading(false)
      }
      
    }

    fetchData()
  }, []);

  return (
    <VStack w={'100%'} alignItems={'start'} gap={'40px'}>
      <Heading>@{username}</Heading>
      <HStack gap={'20px'}>
        <Box boxSize={'150px'} border={'2px solid'} borderColor={'gray.700'} bg={'white'} borderRadius={'full'} overflow={'hidden'}>
          <Image src={loading ? '-':`${SEVER_URL}${profileImage}`} boxSize={'100%'} objectFit={'cover'}/>
        </Box>
        <VStack gap={'20px'}>
          <HStack gap={'20px'} fontSize={'18px'}>
            <VStack>
              <Text>Followers</Text>
              <Text>{loading ? '-':followerCount}</Text>
            </VStack>
            <VStack>
              <Text>Follwing</Text>
              <Text>{loading ? '-':followingCount}</Text>
            </VStack>
          </HStack>
          <Button w={'100%'}>Edit Profile</Button>
        </VStack>
      </HStack>
      <Text>{loading ? '-':bio}</Text>
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

