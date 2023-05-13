import React from 'react'
import {
  BoxPrezzo,
  ButtonCompra,
  Container3Prezzi,
  ContainerCheck,
  ContainerPrezzo,
  PrimoTitolo,
  RaggruppoTestoLista,
  SecondoTitolo,
  TestoLista,
  TitoloGroup,
} from './PrezzoStyled'
import {
  SezioneTitolo,
  TestoSezione,
  TitoloSezione,
} from '../RoadMap/RoadMapStyled'
import { TextButtonApp } from '../Centrale/CentraleStyled'

const Prezzo = () => {
  return (
    <ContainerPrezzo>
      <SezioneTitolo>
        <TitoloSezione>Prezzo</TitoloSezione>
        <TestoSezione>Composizione dei pacchetti disponibili</TestoSezione>
      </SezioneTitolo>
      <Container3Prezzi>
        <BoxPrezzo>
          <TitoloGroup>
            <PrimoTitolo>Pacchetto</PrimoTitolo>
            <SecondoTitolo>Base</SecondoTitolo>
          </TitoloGroup>
          <ButtonCompra>
            <TextButtonApp>Compra</TextButtonApp>
          </ButtonCompra>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Reti di Fantom e Aurora</TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              1,99 USD/mese <br />
              dopo aver recuperato
              <br /> il costo del pacchetto
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Supporto clienti base</TestoLista>
          </RaggruppoTestoLista>
        </BoxPrezzo>
        <BoxPrezzo>
          <PrimoTitolo>Pacchetto</PrimoTitolo>
          <ButtonCompra>
            <TextButtonApp>Compra</TextButtonApp>
          </ButtonCompra>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Reti di Fantom e Aurora</TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              1,99 USD/mese <br />
              dopo aver recuperato
              <br /> il costo del pacchetto
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Supporto clienti base</TestoLista>
          </RaggruppoTestoLista>
        </BoxPrezzo>
        <BoxPrezzo>
          <PrimoTitolo>Pacchetto</PrimoTitolo>
          <SecondoTitolo>Base</SecondoTitolo>
          <ButtonCompra>
            <TextButtonApp>Compra</TextButtonApp>
          </ButtonCompra>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Reti di Fantom e Aurora</TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              1,99 USD/mese <br />
              dopo aver recuperato
              <br /> il costo del pacchetto
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Supporto clienti base</TestoLista>
          </RaggruppoTestoLista>
        </BoxPrezzo>
      </Container3Prezzi>
    </ContainerPrezzo>
  )
}

export default Prezzo
