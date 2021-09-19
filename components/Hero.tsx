import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { IoIosArrowForward } from "react-icons/io";

  export default function Hero() {
    return (
      <Container maxW={'7xl'} background={'#FEF4EA'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
            <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'100%'}
              h={'100%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                height={'lg'}
                src={
                  '/img/card.png'
                }
              />
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontFamily={'Sohne'}
              fontWeight={400}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}>
                Be like <strong>@bjmoon</strong>. Create <strong>amazing habits</strong>,
                <br /> help <strong>amazing organizations</strong>.
              </Text>
              <br />
            </Heading>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'xl'}
                fontWeight={'normal'}
                colorScheme={'whiteAlpha'}
                px={'8'}
                py={'10'}
                color="#FEAD00"
                boxShadow={"5px 5px 25px rgba(187, 187, 187, 0.25);"}
                fontFamily={"Sohne"}
                fontSize={'5xl'}
                bg={'white'}
                _hover={{ bg: '#F8F8F8' }}>
                Join now 
                <Text marginLeft="30"/>
                <IoIosArrowForward/>
              </Button>
            </Stack>
          </Stack>
          
        </Stack>
      </Container>
    );
  }
  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };