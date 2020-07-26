import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;

  /* Verticalmente se passar do limite de y terá scroll */
  overflow-y: scroll;

  /* Escondendo o scrollbar   */
  ::-webkit-scrollbar {
      display: none;
  }
`;
export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);

    margin-bottom: 8px;
`;