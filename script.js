// Category filter system
const categoryCards = document.querySelectorAll(".category-card");
const restaurantCards = document.querySelectorAll(".restaurant-card");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    const selectedCategory = card.getAttribute("data-category");

    restaurantCards.forEach(restaurant => {
      const restaurantCategory = restaurant.getAttribute("data-category");

      if (selectedCategory === restaurantCategory) {
        restaurant.style.display = "block";
      } else {
        restaurant.style.display = "none";
      }
    });
  });
});

document.getElementById("showAllBtn").addEventListener("click", () => {
    restaurantCards.forEach(card => card.style.display = "block");
});

// ===== LOGIN MODAL CONTROL =====
const loginModal = document.getElementById("loginModal");

document.querySelector(".navbar a[href='#login']").addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
});

function closeModal() {
    loginModal.style.display = "none";
}

// Optional: fake login check
function loginUser() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        alert("Welcome " + user + " 👋");
        closeModal();
    } else {
        alert("Please fill all fields!");
    }
}

// ===== CART SYSTEM =====
let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartContainer.innerHTML = ''; // clear old items
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
      <span>${item.name}</span>
      <span>₹${item.price}</span>
      <button onclick="removeItem(${index})">❌</button>
    `;
        cartContainer.appendChild(div);
    });

    totalPrice.textContent = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Order placed successfully! ✅');
        cart = [];
        total = 0;
        updateCart();
    }
}

// ===== SEARCH FUNCTION =====
function searchFood() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let itemName = card.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
