import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .secondary-info {
    position: relative;
    bottom: 3rem;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-block: 2rem;

    border-radius: 2rem 2rem 0 0;
    background: ${({ theme }) => theme.colors.secondBackground};
    border: 3px solid #2c2827;
    border-inline: none;
    border-bottom: none;
  }
  .signature {
    margin-top: 1rem;
    margin-inline: auto;
  }
`;
