import styled from "styled-components";
import { device } from "../../utils/device";
import { Countrie } from "../../types/countrie";
import { CountriesItem } from "./CountriesItem";

type Props = {
    listData: Countrie[];
};

const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media ${device.laptop} {
        max-width: 56.7%;
    }
`

export const CountriesList = (props: Props) => {
    const { listData } = props;

    const drawItems = (countrie: Countrie) => <CountriesItem key={countrie.code} {...countrie} />;

    return (
        <List>
            {listData.map(drawItems)}
        </List>
    );
};