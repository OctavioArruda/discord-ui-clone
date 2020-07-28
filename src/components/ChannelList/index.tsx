import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton ChannelName="Chat-livre"/>
            <ChannelButton ChannelName="Trabalho"/>
            <ChannelButton ChannelName="Jogos"/>
            <ChannelButton ChannelName="Off"/>
        </Container>
    );
};

export default ChannelList;
