import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
`;
export const Profile = styled.div``;
export const Avatar = styled.div``;
export const UserData = styled.div``;
export const Icons = styled.div``;
export const MicIcon = styled(Mic)``;
export const HeadphoneIcon = styled(Headset)``;
export const SettingsIcon = styled(Settings)``;