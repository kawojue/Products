const container = document.querySelector('#container');

const fetchData = async () => {
    const params = new URLSearchParams(window.location.search);
    const searchID = params.get('id');
    const response = await fetch(`https://course-api.com/javascript-store-single-product?id=${searchID}`);
    const data = await response.json();
    return data;
}

fetchData()
    .then(product => {
        displayProduct(product);
    })
    .catch(err => {
        console.warn(err.message);
        container.parentElement.innerHTML = `There was an error..`;
    });

function displayProduct(product) {
    const {
        fields
    } = product;
    const {
        name,
        company,
        description,
        colors,
        price,
        image
    } = fields;
    const {
        url
    } = image[0];
    const formatPrice = price / 100;

    document.title = name.toUpperCase();

    container.innerHTML = `
        <img src="${url}" alt="testing">
        <div class="sub-container">
            <h3 class="title">${name}</h3>
            <p class="subtitle">${company}</p>
            <span class="price">${formatPrice}</span>
            <div class="round-shape">
                ${colors.map(color => `<span style="background: ${color}"></span>`).join('')}
            </div>
            <p class="texts">${description}</p>
            <button type="button" class="px-3 py-1 btn trans hover:bg-bg-clr-3">
                add to cart
            </button>
        </div>
    `
}