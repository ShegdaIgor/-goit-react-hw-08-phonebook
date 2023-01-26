import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/register.thunk';
import css from './RegisterPage.module.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className={css.contacts}>
      <Flex>
        <form onSubmit={handleSubmit}>
          <FormControl ml={4}>
            <FormLabel mt={5}>Name</FormLabel>
            <Input
              type="text"
              placeholder="First name"
              htmlSize={30}
              width="auto"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <FormLabel mt={5}>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email Address"
              htmlSize={30}
              width="auto"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <FormLabel mt={5}>Password</FormLabel>
            <Input
              type="text"
              autoComplete="off"
              htmlSize={30}
              width="auto"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="sm" mt={5} ml={235}>
            Sign Up
          </Button>
        </form>
      </Flex>
    </div>
  );
}

export default RegisterPage;
