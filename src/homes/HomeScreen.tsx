/* eslint-disable prettier/prettier */
import {Text} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';

const HomeScreen = () => {
  return (
    <Container>
      <Text style={[globalStyles.text]}>HomeScreen</Text>
    </Container>
  );
};

export default HomeScreen;
