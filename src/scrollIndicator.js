window.onscroll = function() {
  processScrollIndicator();
};

function processScrollIndicator() {
  var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollPosition = (windowScroll / documentHeight) * 100;
  document.getElementById(element).style.width = scrollPosition + '%'; // element is a placeholder
}