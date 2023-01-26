import styled from "styled-components";
import { device } from "../utils/device";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

type Props = {
    
};

const Wrapper = styled.header`
    @media ${device.laptop} {
        display: flex;
        align-items: center;
        padding: 49px 40px;
    }
`
const StyledLogo = styled(Logo)`
    height: 30px;
    width: 80px;
`
const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 63px 0 36px;
    letter-spacing: -0.2px;
    @media ${device.laptop} {
        margin: 0 0 0 160px;
    }
`

const Header = (props: Props) => {
    return (
        <Wrapper>
            <StyledLogo/>
            <Paragraph>Virta platform compatible countries</Paragraph>
        </Wrapper>
    );
};

export { Header };