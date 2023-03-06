import FooterContainer from "./style";

function Footer({cards, cardRespondido}){
    return(
        <FooterContainer data-test="footer">
            <p>{`${cardRespondido}/${cards} CONCLUÍDOS`}</p>
        </FooterContainer>
    )
}

export default Footer;