function loadPage(page) {
  fetch(`js/${page}.js`)
    .then(res => res.text())
    .then(code => eval(code));
}

loadPage('today');
