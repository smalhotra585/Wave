$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear'
  });
});

const options = {
  bottom: '600px', 
  right: '32px', 
  left: 'unset', 
  time: '0.5s', 
  mixColor: '#fff', 
  backgroundColor: '#fff', 
  buttonColorDark: 'black', 
  buttonColorLight: '#fff', 
  saveInCookies: false, 
  label: '🌓', 
  autoMatchOsTheme: true, 
}

const darkmode = new Darkmode(options);
darkmode.showWidget();	