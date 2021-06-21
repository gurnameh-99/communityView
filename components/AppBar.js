import React from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

const AppBar = () => {
  return (
    <Container>
      <Text>Community</Text>
      <Row>
        <Button>
          <Icon name="search" size={25} />
        </Button>
      </Row>
    </Container>
  );
};

export default AppBar;
