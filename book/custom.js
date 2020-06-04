function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  document.body.appendChild(s);
  console.log('added script tag');
}

addScript('https://www.googletagmanager.com/gtag/js?id=UA-168213063-1');

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-168213063-1');
