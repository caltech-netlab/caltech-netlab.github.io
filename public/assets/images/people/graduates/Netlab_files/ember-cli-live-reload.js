(function() {
  var srcUrl = null;
  var host= location.hostname || 'localhost';
  var liveReloadPort = undefined;
  var defaultPort = location.protocol === 'https:' ? 443 : 80;
  var port = liveReloadPort || location.port || defaultPort;
  var path = '&path=_lr/livereload';
  var prefixURL = '';
  var src = srcUrl || prefixURL + '/_lr/livereload.js?port=' + port + '&host=' + host + path;
  var script    = document.createElement('script');
  script.type   = 'text/javascript';
  script.src    = src;
  document.getElementsByTagName('head')[0].appendChild(script);
}());