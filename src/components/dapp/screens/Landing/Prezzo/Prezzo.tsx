import React from 'react'
import {
  BoxPrezzo,
  BoxTestoPrezzo,
  ButtonCompra,
  Container3Prezzi,
  ContainerCheck,
  ContainerPrezzo,
  PrezzoTesto,
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
          <BoxTestoPrezzo>
            <PrezzoTesto>300€</PrezzoTesto>
          </BoxTestoPrezzo>

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
          <ButtonCompra style={{ position: 'relative', bottom: ' -240px' }}>
            <TextButtonApp>Compra</TextButtonApp>
          </ButtonCompra>
        </BoxPrezzo>
        <BoxPrezzo>
          <TitoloGroup>
            <PrimoTitolo>Pacchetto</PrimoTitolo>
            <SecondoTitolo>Intermedio</SecondoTitolo>
          </TitoloGroup>
          <BoxTestoPrezzo>
            <PrezzoTesto>500€</PrezzoTesto>
          </BoxTestoPrezzo>

          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Reti di Fantom, Aurora e BSC</TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              2,99 USD/mese <br />
              dopo aver recuperato
              <br /> il costo del pacchetto
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              Supporto clienti <br />
              intermedio
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              Sconto del 30%
              <br /> sulle funzionalità <br />
              aggiuntive in arrivo
            </TestoLista>
          </RaggruppoTestoLista>
          <ButtonCompra style={{ position: 'relative', bottom: ' -65px' }}>
            <TextButtonApp>Compra</TextButtonApp>
          </ButtonCompra>
        </BoxPrezzo>
        <BoxPrezzo>
          <TitoloGroup>
            <PrimoTitolo>Pacchetto</PrimoTitolo>
            <SecondoTitolo>Premium</SecondoTitolo>
          </TitoloGroup>
          <BoxTestoPrezzo>
            <PrezzoTesto>800€</PrezzoTesto>
          </BoxTestoPrezzo>

          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              Reti di Fantom, Aurora,
              <br /> BSC, Polygon e <br />
              successive
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              3,99 USD/mese <br />
              dopo aver recuperato
              <br /> il costo del pacchetto
            </TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>Supporto clienti premium</TestoLista>
          </RaggruppoTestoLista>
          <RaggruppoTestoLista>
            <ContainerCheck>
              {' '}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3UzyoFURwH8GElyr+6PImFYkM2kpUH8ABeQdnJRmHHjh0PYWNlKSlSSimylgX3fjS5aYxj3MOZsrjf5Zzf/D7nd5o5WdbNfwiWsY1GncgkXr3nAQt1IP249DnP6E0Nbfmaw9TIFJol5BHjKZEBXAemWUqG5MFuADnIUgZzaJWQO4ymRIZwG5hmPqbJCNbz/6KiZj+A7MUgwzhtv/iE2UDNYgC5wWAMdFxqkGMzhfUG7ks1rWJNp9BJYLcfGI4C6ztRSLvRGM6/wTYDz6/y6ycaKhzPmZ/TxPSvkEhs409Ih9gF+pJAFdgLJpIhFR/IWnKkdOWsYgU9tUHdZIG8AXfnYXxwGVtiAAAAAElFTkSuQmCC" />
            </ContainerCheck>
            <TestoLista>
              Sconto del 50% <br />
              sulle funzionalità
              <br /> aggiuntive in arrivo
            </TestoLista>
          </RaggruppoTestoLista>
          <ButtonCompra style={{ position: 'relative', bottom: ' -40px' }}>
            <TextButtonApp>Compra</TextButtonApp>
          </ButtonCompra>
        </BoxPrezzo>
      </Container3Prezzi>
    </ContainerPrezzo>
  )
}

export default Prezzo
