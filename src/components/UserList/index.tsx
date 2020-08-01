import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>  
      <Role>Disponível - 3</Role>
        <UserRow nickname="Schifer" />
        <UserRow nickname="Hyago" />
        <UserRow nickname="Nycho" />

    <Role>Offline - 2</Role>
        <UserRow nickname="suba" isBot />
        <UserRow nickname="Alka" />
    </Container>
  );
};

export default UserList;