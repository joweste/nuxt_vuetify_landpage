var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode: "enter your code here",
  values: {},
  ready: function() {
    $zoho.salesiq.language("pt");
  }
};
var d = document;
s = d.createElement("script");
s.type = "text/javascript";
s.id = "zsiqscript";
s.defer = true;
s.src = "https://salesiq.zoho.com/widget";
t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(s, t);
d.write("<div id='zsiqwidget'></div>");
