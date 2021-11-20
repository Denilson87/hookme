import React from 'react';
import styled from 'styled-components';
import Button from './app/components/Button/Button';
import { fetchData } from './app/api';
import CountryPicker from './app/components/CountryPicker';
import Input from './app/components/Input';

const AppConatiner  = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 height: 50vh;
 width: 30vw;
 background: rgba(255, 255, 255, 0.15);
 box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
 backdrop-filter: blur(8.5px);
 border-radius: 10px;
 color:#ffff;
 text-transform: uppercase;
 letter-spacing: 0.4rem;
 
 @media only screen and (min-width:360px)
 {
   width:80vw;
   height:80vh;
  
   h4 {
     font-size: small;
    
   }
 }
 @media only screen and (min-width:411px)
 {
   width:80vw;
   height:90vh;
   }
@media only screen and (min-width:768px)
 {
   width:80vw;
   height:100vh;
   }
@media only screen and (min-width:1024px)
 {
   width:70vw;
   height:50vh;
   }
@media only screen and (min-width:1030px)
 {
   width:50vw;
   height:89vh;
   }
`;

const TitleSection = styled.label`
  
  font-size:18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin: 3rem 0 2rem 0;

`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
`;

const ButtonContainer = styled.div`

 margin: 1rem 0 2rem 0;
 width: 14rem;
 display: flex;
 align-items: center;
 justify-content: center;

`;
const InternalContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 height: 28vh;
 width: 40vw;
 background: rgba(255, 255, 255, 0.829);
 box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
 backdrop-filter: blur(8.5px);
 border-radius: 10px;
 /* color:#ffff; */
 text-transform: uppercase;
 letter-spacing: 0.4rem;
 @media only screen and (min-width:1030px)
 {
   width:48vw;
   height:46vh;
   }
`;

const DescritionContainer = styled.div`

display:flex;
justify-content: space-evenly;
margin:2rem 0 3rem 0;
width: 80%;
color: black;
font-size: small;
@media only screen and (min-width:1030px)
 {
   width:40vw;
   height:97vh;
   }
`;
const FlagConatiner = styled.div`

letter-spacing: 0.2rem;
width:65%;
height:3rem;
border:none;
color: #000000;
border-radius: 2rem;
cursor: pointer;

`;
const TextInfo = styled.label`
display: flex;
font-weight: 200rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4rem;
color:#000000;
cursor: pointer;
`;

function App(){
  
  return<AppConatiner>
        <TitleSection>
            Pesquise pelo pais !
        </TitleSection>
        <InputContainer>
        <CountryPicker  />
      {/* <Input type="Text" placeholder="Digite o nome do pais ou cidade" /> */}
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" content="Pesquisar"></Button>
        </ButtonContainer>
        <InternalContainer>
          <DescritionContainer>
            <TextInfo>Pais:</TextInfo>
            <TextInfo>Capital:</TextInfo>
            <TextInfo>Região:</TextInfo>            
          </DescritionContainer>
          <DescritionContainer>
            <TextInfo>Area:</TextInfo>
            <TextInfo>Fuso horario:</TextInfo>
            <TextInfo>Nome Nativo:</TextInfo>                        
          </DescritionContainer>
                   Bandeira comes Here
        </InternalContainer>
    </AppConatiner>    

}

export default App;
