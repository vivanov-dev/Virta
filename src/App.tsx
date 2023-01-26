import styled from "styled-components";
import { device } from "./utils/device";
import { Header, CountriesList } from "./components";
import { useCountries } from "./hooks/useCountries";
import BackgroundEl from "../src/assets/svg/bg-el.svg";

const Layout = styled.div`
    min-height: 100vh;
    background: #D4D9DE;
    padding: 16px;
    @media ${device.laptop} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
    }
`
const Wrapper = styled.div`
    @media ${device.laptop} {
        padding: 70px 70px 52px 296px;
    }
`
const H1 = styled.h1`
    font-size: 54px;
    font-weight: 700;
    letter-spacing: -0.6px;
    margin: 0 0 68px;
    display: none;
    @media ${device.laptop} {
        display: block;
    }
`
const StyledBackground = styled(props => <BackgroundEl {...props} />)`
    display: none;
    margin-left: auto;
    width: 88.6%;
    @media ${device.laptop} {
        display: block;
    }
`

function App() {
    const { isLoading, data } = useCountries();
    return (
        <Layout>
            <Header/>
            <Wrapper>
                <H1>Compatible countries</H1>
                {
                    isLoading 
                    ? "Loading...." 
                    : <CountriesList listData={data}/>
                }
            </Wrapper>
                <StyledBackground width={"100%"} height={"100%"} />
        </Layout>
    )
}

export default App
