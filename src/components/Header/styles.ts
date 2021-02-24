import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    padding: 0 8rem;
    width: 100vw;
    height: 3.75rem;

    font-weight:600;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textHeaderBar};

    background: ${props => props.theme.colors.bgHeaderBar};
`;

export const SunIconContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(3px);
    
    .iconLight {
        height: 18px;
        color: ${props => props.theme.colors.bgHeaderBar}
    }
`;

export const MoonIconContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(3px);
    .iconDark {
        height: 18px;
        color: ${props => props.theme.colors.textHeaderBar}
    }
`;