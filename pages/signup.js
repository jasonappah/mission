import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import Router from 'next/router'
  
  export default function SignupCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function validateEmail(mail) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(mail).toLowerCase());
    }
  
    const onRegisterPress = () => {
      if (!validateEmail(email) || email.length > 62) {
        alert('Invalid email.');
        return;
      }
      if (password.length < 6) {
        alert('The password must be at least 6 characters.');
        return;
      }
      const usersRef = firebase.firestore().collection('users');
      usersRef
        .where('email', '==', email)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(async (response) => {
                const uid = response.user.uid;
                const data = {
                  id: uid,
                  email,
                  image: '',
                };
                usersRef
                  .doc(uid)
                  .set(data)
                  .catch((error) => {
                    alert(error);
                  });
                response.user.sendEmailVerification();
                Router.push('/')
              })
              .catch((error) => {
                alert(error);
              });
          } else {
            alert('Usuário já cadastrado!');
            return;
          }
        });
    };
  
    return (
      <Flex
        minH={'40vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign="center">
              Faça parte da comunidade.
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              faça parte da rede.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(text) => setEmail(text.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(text) => setPassword(text.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={() => onRegisterPress()}
                >
                  Criar Conta
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  