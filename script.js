function filtrar() {
const input = document.getElementById('searchInput');
const filter = input.value.toLowerCase();
const lista = document.getElementById('lista');
const items = lista.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
const texto = items[i].textContent || items[i].innerText;
items[i].style.display = texto.toLowerCase().includes(filter) ? "" : "none";
}
}