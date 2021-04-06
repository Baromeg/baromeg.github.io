import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

}

html{
  @media (max-width: 1700px) {
    font-size: 90%
  }
  @media (max-width: 1024px) {
    font-size: 80%;
  }
  @media (max-width: 768px) {
    font-size: 70%
  }
  @media (max-width: 414px) {
    font-size: 60%
  }
  @media (max-width: 320px) {
    font-size: 50%
  }
  /* @media (max-width: 1300px) {
    font-size: 50%
  } */
  
}

body {
  background: ${({ theme }) => theme.body};
  /* #1b1b1b; */
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  transition: all 0.50s linear;

}

button {
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #fc8621;
  background: transparent;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  margin-top: 1.5rem;
  &:hover{
    background-color: #fc8621;
    color: white;
  }
}
h1 {
  font-weight: lighter;
  font-size:6rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s ease;

  /* font-family: "Lobster", cursive; */
    /* font-family: "Audiowide", cursive; */
    /* font-family: "Barrio", cursive; */
    /* font-family: "Black Ops One", cursive; */
    /* font-family: "Bungee Outline", cursive; */
    /* font-family: "Bungee Shade", cursive; */
    /* font-family: "Faster One", cursive; */
    /* font-family: "Fontdiner Swanky", cursive; */
    /* font-family: "Grenze Gotisch", cursive; */
    /* font-family: "Kelly Slab", cursive; */
    /* font-family: "Kranky", cursive; */
    font-family: "Megrim", cursive;
    /* font-family: "Monofett", cursive; */
    /* font-family: "Monoton", cursive; */
    /* font-family: "Wallpoet", cursive; */
    /* font-family: "ZCOOL KuaiLe", cursive; */
    
}
h2 {
  font-weight: lighter;
  font-size:4rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s ease;

  @media (max-width: 414px) {
    font-size: 2.5rem;
  }
  @media (max-width: 375px) {
    font-size: 2.3rem;
  }
}

h3 {
  color: ${({ theme }) => theme.text};
  transition: all 0.5s ease;

}

h4{
  font-weight:bold;
  font-size: 2rem;
  transition: all 0.5s ease;

}

a{
  font-size: 1.7rem;
  transition: all 0.5s ease;

}

span {
  font-weight:bold;
  color:#fc8621
}

p {
  padding: 1.5rem 0rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  line-height: 150%;
  transition: all 0.5s ease;

}
`
export default GlobalStyle
