import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container,
        Messages,
        InputWrapper,
        Input,
        InputIcon
} from './styles';

const ChannelData: React.FC = () => {
    // useRef Hook
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    // useEffect Hook
    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage 
                    key={n}
                    author="Schifer"
                    date="31/07/2020"
                    content="Aliquam pharetra finibus nisi, et mollis felis dictum sed."
                />
                ))}
                <ChannelMessage 
                    author="Schifer"
                    date="31/07/2020"
                    content="Aprendendo React JS com TypeScript e styled-components"
                />

                <ChannelMessage 
                    author="suba"
                    date="31/07/2020"
                    content={
                        <>
                            <Mention>@Schifer</Mention>, dropa uma AK aí...
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
