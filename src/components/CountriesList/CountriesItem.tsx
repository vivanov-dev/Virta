import styled from "styled-components";
import { device } from "../../utils/device";
import { Countrie } from "../../types/countrie";
import { Flag } from "../Flag";
import Check from "../../assets/svg/checkmark-filled.svg";
import Close from "../../assets/svg/close-filled.svg";

const Li = styled.li`
    display: flex;
    background: #FFFFFF;
    flex-direction: column;
    position: relative;
    min-height: 64px;
    padding: 8px 60px 8px 56px;
    @media ${device.laptop} {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
`
const FlagIcon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
`
const RowWrapper = styled.div`
    display: flex;
    align-items: center;
`
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const CountryName = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
`
const Timezone = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #5F5F5F;
`
const CountryCode = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #5F5F5F;
`
const Indicator = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 48px;
    border-radius: 0px 8px 8px 0px;
`
const EnabledIndicator = styled(props => <Indicator {...props} />)`
    background: #00AD09;
`
const DisabledIndicator = styled(props => <Indicator {...props} />)`
    background: #FF0000;
`
const Status = styled.div`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
`
const CheckIcon = styled(props => <Check {...props} />)`
    fill: #00AD09;
    width: 24px;
    height: 24px;
`
const CloseIcon = styled(props => <Close {...props} />)`
    fill: #FF0000;
    width: 24px;
    height: 24px;
`

export const CountriesItem = (props: Countrie) => {
    const { code, name, defaultTimezone, otpInAppEnabled } = props;

    return (
        <Li>
            { otpInAppEnabled ? <EnabledIndicator/> : <DisabledIndicator/> }
            <RowWrapper>
                <FlagIcon>
                    <Flag countryCode={code}/>
                </FlagIcon>
                <ColumnWrapper>
                    <CountryName>{name}</CountryName>
                    <Timezone>Timezone {defaultTimezone}</Timezone>
                </ColumnWrapper>
            </RowWrapper>
            <CountryCode>Country code: {code}</CountryCode>
            <Status>
                { otpInAppEnabled ? <CheckIcon/> : <CloseIcon/> }
            </Status>
        </Li>
    );
}