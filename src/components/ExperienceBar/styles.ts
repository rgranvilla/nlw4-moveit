import styled from 'styled-components';

export const BarContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const BarContentText = styled.text`
    font-size: 1rem;
`;

export const BarLanding = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.bgProgress};
    margin: 0 1.5rem;
    position: relative;
`;

export const BarLoading = styled.div`
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.progress};
`;

export const BarLoadingText = styled.text`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`;