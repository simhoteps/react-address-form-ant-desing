import styled from 'styled-components';
import { rgba } from 'polished'; // For alpha transparency


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, ${rgba(0, 41, 100, 0.3)} 0%, rgba(0, 41, 100, 1) 100%);
  gap: 32px;
  @media (max-width: 576px) {
    padding: 32px;
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px;
  box-sizing: border-box;
  gap: 32px;
  overflow-y: auto;
  @media (max-width: 576px) {
    padding: 32px;
  }
`;