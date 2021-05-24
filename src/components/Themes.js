import macbook from '../img/dark2.jpg'
import macbookEdited from '../img/macbookEdited1.png'
import macbookTable from '../img/bright4.jpg'
import coffee from '../img/coffeebackground8.png'

export const lightTheme = {
  body: 'radial-gradient(#dfe1e6, white)',
  text: '#2e2e2e',
  toggleBorder: '#FAFAFA',
  background: '#363537',
  shadowInput: 'inset 2px 2px 5px #a5a9b6, inset -3px -3px 5px #fff',
  shadowFocus: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff',
  shadowButton: '-2px -2px 3px #dfdfdf,  3px 3px 5px #BABECC',
  shadowHover: '-2px - 2px 5px #fff, 2px 2px 5px #BABECC',
  shadowActive: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #fff',
  toggle: '#5c5c5c',
  toggle1: '#dfdfdf',
  homeBackground: `url(${macbookTable})`,
  contactBackground: `url(${coffee}),url(${macbookTable})`,
  navbarBackground: 'rgba(241, 241, 241, 0.596)'
}

export const darkTheme = {
  body: 'radial-gradient(#3b3b3b, #1b1b1b)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  shadowInput: 'inset 2px 2px 3px #333d3a, inset -1px -1px 3px #cacbd1',
  shadowFocus: 'inset 1px 1px 2px #cacbd1, inset -1px -1px 2px #fff',
  shadowButton: '-3px -3px 5px #555454, 3px 3px 5px black',
  shadowHover: '-2px -2px 6px #3b3b3b, 2px 2px 3px black',
  shadowActive: 'inset 1px 1px 2px #3b3b3b, inset -1px -1px 2px black',
  toggle: '#ffffff',
  toggle1: '#aaaaaa',
  homeBackground: `url(${macbook})`,
  contactBackground: `url(${coffee}),url(${macbook})`,
  navbarBackground: 'rgba(0, 0, 0, 0.5)'
}
