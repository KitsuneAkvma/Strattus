import styled from 'styled-components'

export const StyledDashboard = styled.div`
  height: 100vh;
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color};
  }

`
