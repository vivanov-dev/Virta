import styled from "styled-components";
import Flags from "country-flag-icons/react/3x2";

type Props = {
    [countryCode: string]: any;
};
  
const FlagsObJ: Props = {
    countryCode: Flags,
};

const Wrapper = styled.div`
    height: 15px;
    width: 20px;
`

export const Flag = ({ countryCode }: Props) => {
    const FlagIcon = FlagsObJ[countryCode];
    return (
        <Wrapper>
            <FlagIcon width="100%" height="100%"/>
        </Wrapper>
    );
};