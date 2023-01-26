import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/register.thunk';
import css from './LoginPage.module.css';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    dispatch(loginThunk(formData));
    setEmail('');
    setPassword('');
    navigate('/contacts');
  };

  return (
    <div className={css.login}>
      <form onSubmit={handleSubmit}>
        <FormControl ml={4}>
          <FormLabel mt={5}>Email </FormLabel>
          <Input
            type="email"
            placeholder="Email"
            htmlSize={30}
            width="auto"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FormLabel mt={5}>Password</FormLabel>
          <Input
            type="password"
            autoComplete="off"
            htmlSize={30}
            width="auto"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="sm" mt={5} ml={245}>
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
