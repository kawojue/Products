const loadingSpin = document.querySelector('.loading-spin');
const content = document.querySelector('#content');

const fetchData = async () => {
    const response = await fetch('https://course-api.com/javascript-store-products')
    const data = await response.json();
    return data;
}

const displayProduct = list => {
    const productList = list.map(item => {
        const {
            id,
            fields
        } = item;
        const {
            name,
            price,
            image
        } = fields;
        const {
            url
        } = image[0];
        const formatPrice = price / 100;
        return `
            <a href="product.html?id=${id}" class="link" target="_blank">
                <img src="${url}" alt="${name}>
                <footer class="foot">
                    <h5>${name}</h5>
                    <span>$${formatPrice}</span>
                </footer>
            </a>
        `;
    }).join('');
    content.innerHTML = productList;
}

fetchData()
    .then(message => {
        loadingSpin.classList.add('hidden');
        displayProduct(message);
    })
    .catch(err => {
        loadingSpin.innerHTML = "There was an error..";
        console.warn(err.message);
    });