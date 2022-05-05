import { Box, Container, Row, Column, FooterLink, Heading,} from "./FooterStyles";

export const Footer = () => {
    return (
        <Box>
            <h4 style={{color: 'white', textAlign: 'center'}}>
                Mrs. Who's Library </h4>
            <Container>
                <Row>
                <Column>
                    <Heading><FooterLink href="#">About Us</FooterLink></Heading>
                    
                </Column>
                <Column>
                    <Heading><FooterLink href="#">Contact Us</FooterLink></Heading>
                    <FooterLink href="#">+45 91953654</FooterLink>
                </Column>
                </Row>
                <p style={{color: 'white', textAlign: 'center'}}>© 2022 Mrs. Who's Library </p>

            </Container>
        </Box>
  );
};