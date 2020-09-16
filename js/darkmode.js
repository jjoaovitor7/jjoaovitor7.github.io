const options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.8s', // default: '0.3s'
    mixColor: '#00428c', // default: '#fff'
    backgroundColor: 'url("../assets/bg.png"), -o-linear-gradient(45deg, #003d99,#00428c) fixed',  // default: '#fff'
    buttonColorDark: '#000',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();