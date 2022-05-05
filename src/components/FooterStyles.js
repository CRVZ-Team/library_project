import styled from 'styled-components';

export const Box = styled.div`
padding: 10px 20px;
background: #556b2f;
opacity: 0.65;
position: fixed;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 10px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
font-size: 18px;
text-decoration: none;

&:hover {
	color: black;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
font-weight: bold;
`;
