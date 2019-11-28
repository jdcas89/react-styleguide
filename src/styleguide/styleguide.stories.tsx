import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from './Typography';
import styled from 'styled-components';
import { colors } from './colors';
import { breakpoints } from './theme';
import { space } from './space';

const { H1, H2, H3, H4, H5, LargeLead, Link, Paragraph, SmallLead, SmallParagraph } = Typography;

storiesOf('Styleguide ', module)
  .addParameters({ viewport: { defaultViewport: 'default' } })
  .add('default', () => (
    <Container>
      <H2>Typography</H2>
      <Divider />
      <H1>H1: Animi aperiam, aspernatur culpa deserunt eaque, eius explicabo inventore ipsa laudantium</H1>
      <H2>H2: Consectetur consequuntur cum deserunt dignissimos esse fugiat inventore iusto, laboriosam maiores minima!.</H2>
      <H3>H3: Culpa dignissimos expedita facilis, fugiat minus odio reiciendis ut? Accusamus delectus dicta eius.</H3>
      <H4>H4: Accusamus ad adipisci alias aliquam aperiam autem, culpa dolorem enim error est eum.</H4>
      <H5>H5: Debitis distinctio dolorum fugiat impedit itaque necessitatibus, quo sunt? Atque consectetur, corporis.</H5>
      <LargeLead>LargeLead:Deleniti est facere id placeat provident sapiente totam vitae. Asperiores consequuntur eaque eum.</LargeLead>
      <SmallLead>SmallLead: At aut corporis culpa doloribus ea enim error est impedit, ipsum iure maxime molestiae omnis optio.</SmallLead>
      <Paragraph>
        Paragraph: Facilis hic iste perspiciatis qui quibusdam sint velit vero Animi doloremque esse ex iure perferendis.
      </Paragraph>
      <SmallParagraph>SmallParagraph: Ad animi at debitis eligendi explicabo facere illum inventore, ipsum minus obcaecati.</SmallParagraph>
      <Link to="/">Link: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
      <Divider />
      <H2>Colors</H2>
      <Paragraph>These colors are defined in styleguide colors.ts.</Paragraph>
      <Divider />
      <GridContainer>
        <div>
          <SmallParagraph>Kind</SmallParagraph>
        </div>
        <div>
          <SmallParagraph>HEX</SmallParagraph>
        </div>
        <div>
          <SmallParagraph>Color</SmallParagraph>
        </div>
      </GridContainer>
      {Object.entries(colors).map(obj => (
        <GridContainer key={obj[0]}>
          <SmallParagraph>{obj[0]}</SmallParagraph>
          <SmallParagraph>{obj[1]}</SmallParagraph>
          <ColorCircle color={obj[1]} />
        </GridContainer>
      ))}
      <Divider />
      <H2>Breakpoints</H2>
      <Paragraph>These are the responsive breakpoints being used</Paragraph>
      <br />
      <FlexContainer>
        {breakpoints.map((key: string) => (
          <SmallParagraph key={key} m={4}>
            {key}
          </SmallParagraph>
        ))}
      </FlexContainer>
      <Divider />
      <H2>Space</H2>
      <FlexContainer>
        {Object.entries(space).map(obj => (
          <div key={obj[0]}>
            <SmallParagraph m={2}>
              <strong>{obj[1]}px</strong>
            </SmallParagraph>
            <SmallParagraph m={2}>{obj[0]}</SmallParagraph>
          </div>
        ))}
      </FlexContainer>
    </Container>
  ));

const Divider = styled.div`
  border: 1px solid #00000022;
  width: 100%;
  margin: ${({ theme }) => theme.space.M}px;
`;

const ColorCircle = styled.div<{ color: string }>`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  margin: ${({ theme }) => theme.space.M}px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  padding: 16px;
`;
