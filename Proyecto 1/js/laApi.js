const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('resultsDiv');

searchBtn.addEventListener('click', () => {
  const productId = searchInput.value.trim();

  if (productId === '') {
    alert('Por favor, introduce el ID del producto');
    return;
  }

  axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response => {
      const item = response.data;

      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <h2>${item.title}</h2>
        <h3>Precio :$${item.price}</h3>
        <p>Descripción :${item.description}</p>
        <img src="${item.image}" alt="${item.title}">
      `;

      resultsDiv.innerHTML = '';
      resultsDiv.appendChild(productDiv);
    })
    .catch(error => {
      alert('Se produjo un error al buscar el producto.');
    });
});
