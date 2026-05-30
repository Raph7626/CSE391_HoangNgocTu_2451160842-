const products = [
    { id: 1, name: "iPhone 16 Pro", price: 25990000, category: "phone", image: "https://placehold.co/300x200", rating: 4.8, inStock: true },
    { id: 2, name: "Samsung Galaxy S25", price: 22990000, category: "phone", image: "https://placehold.co/300x200", rating: 4.6, inStock: true },
    { id: 3, name: "MacBook Air M3", price: 32990000, category: "laptop", image: "https://placehold.co/300x200", rating: 4.9, inStock: true },
    { id: 4, name: "Dell XPS 14", price: 28990000, category: "laptop", image: "https://placehold.co/300x200", rating: 4.5, inStock: false },
    { id: 5, name: "AirPods Pro 2", price: 5990000, category: "audio", image: "https://placehold.co/300x200", rating: 4.7, inStock: true },
    { id: 6, name: "Sony WH-1000XM5", price: 7490000, category: "audio", image: "https://placehold.co/300x200", rating: 4.8, inStock: true },
    { id: 7, name: "iPad Pro 2025", price: 18990000, category: "tablet", image: "https://placehold.co/300x200", rating: 4.6, inStock: true },
    { id: 8, name: "Samsung Galaxy Tab S9", price: 15990000, category: "tablet", image: "https://placehold.co/300x200", rating: 4.4, inStock: true },
    // Thêm nhiều hơn để đủ 12+
    { id: 9, name: "iPhone 15", price: 18990000, category: "phone", image: "https://placehold.co/300x200", rating: 4.5, inStock: true },
    { id: 10, name: "Lenovo ThinkPad", price: 24990000, category: "laptop", image: "https://placehold.co/300x200", rating: 4.3, inStock: true },
    { id: 11, name: "Sony WF-1000XM5", price: 4990000, category: "audio", image: "https://placehold.co/300x200", rating: 4.7, inStock: true },
    { id: 12, name: "iPad Air 6", price: 13990000, category: "tablet", image: "https://placehold.co/300x200", rating: 4.6, inStock: true },
];

let cart = [];
let currentCategory = 'all';

// Render sản phẩm
function renderProducts(filteredProducts) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price.toLocaleString('vi-VN')} ₫</p>
                <p>⭐ ${product.rating}</p>
                <button class="add-to-cart" data-id="${product.id}">Thêm vào giỏ</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add to cart event
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    });
}

// Thêm vào giỏ
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cartCount').textContent = cart.length;
    alert(`✅ Đã thêm ${product.name} vào giỏ hàng!`);
}

// Filter & Search
function filterAndSearch() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchText);
        const matchCategory = currentCategory === 'all' || product.category === currentCategory;
        return matchSearch && matchCategory;
    });
    renderProducts(filtered);
}

// Khởi tạo Category Filters
function initCategoryFilters() {
    const categories = ['all', ...new Set(products.map(p => p.category))];
    const container = document.getElementById('categoryFilters');
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat === 'all' ? 'Tất cả' : cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.dataset.category = cat;
        if (cat === 'all') btn.classList.add('active');
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-filters button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = cat;
            filterAndSearch();
        });
        container.appendChild(btn);
    });
}

// Dark Mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Event Listeners
document.getElementById('searchInput').addEventListener('input', filterAndSearch);
document.getElementById('sortSelect').addEventListener('change', (e) => {
    let sorted = [...products];
    const value = e.target.value;

    if (value === 'price-asc') sorted.sort((a,b) => a.price - b.price);
    if (value === 'price-desc') sorted.sort((a,b) => b.price - a.price);
    if (value === 'name-asc') sorted.sort((a,b) => a.name.localeCompare(b.name));
    if (value === 'rating-desc') sorted.sort((a,b) => b.rating - a.rating);

    renderProducts(sorted);
});

// Khởi chạy
initCategoryFilters();
renderProducts(products);