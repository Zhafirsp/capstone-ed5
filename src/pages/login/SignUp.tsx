import React from 'react';
import '../../App.css';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const VARIANT_COLOR = 'teal'
export default function SignUp() {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <Box p={4}>
          <SignUpHeader />
          <SignUpForm />
        </Box>
      </Box>
    </Flex>
  )
}



const SignUpHeader = () => {
  return (
    <Box textAlign='center'>
      <Heading>Sign In to Your Account</Heading>
    </Box>
  )
}

const SignUpForm = () => {
  return (
    <Box my={8} textAlign='left'>
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='Enter your email address' />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter your password' />
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
          </Box>
        </Stack>

        <Link to='/membaca'>
          <Button width='full' mt={4}>Sign In</Button>
        </Link>
      </form>
    </Box>
  )
}