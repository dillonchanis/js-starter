// Change localhost:3005 depending on what you chose from your npm scripts

//To use MockAPI:
//localhost:3000/?useMockApi=true
export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://locahost:3005' : '/';
}

function getQueryStringParameterByName(name, url) {
  if(!url) url = window.location.href;

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  if(!results) return null;
  if(!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
