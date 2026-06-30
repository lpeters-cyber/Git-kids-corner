const products = [
  {
    name: "Twisting Hedgehog",
    category: "Baby and Toddler",
    price: 230,
    rating: 5,
    stock: true,
    color: "#f5d4cb",
    tag: "18 months +",
    newest: 10,
    image: "assets/twisting-hedgehog.jpg",
    images: ["assets/twisting-hedgehog.jpg"],
    description: "Introduce fine motor skills and creativity with twisting fun, chunky easy-grip pieces, colours, shapes, and an adorable hedgehog design.",
    details: [
      "5 screws and a screwdriver for twisting fun",
      "Chunky, easy-to-grip pieces for little hands",
      "Supports colours, shapes, imagination, and fine motor skills"
    ]
  },
  {
    name: "Wooden caterpillar threading",
    category: "Learning Tools",
    price: 490,
    rating: 5,
    stock: true,
    color: "#d8ece3",
    tag: "Fine motor skills",
    newest: 9,
    image: "assets/wooden-caterpillar-threading-1.jpg",
    images: [
      "assets/wooden-caterpillar-threading-1.jpg",
      "assets/wooden-caterpillar-threading-2.jpg",
      "assets/wooden-caterpillar-threading-3.jpg",
      "assets/wooden-caterpillar-threading-4.jpg",
      "assets/wooden-caterpillar-threading-5.jpg"
    ],
    description: "A beautiful wooden food and caterpillar threading activity with 18 solid wooden food pieces, a caterpillar threader, and sequencing cards.",
    details: [
      "Includes 18 durable wooden food pieces",
      "Comes with a caterpillar threader and sequencing cards",
      "Supports fine motor skills, planning, sequencing, and language"
    ]
  },
  {
    name: "Race Rod cars 4 piece",
    category: "Vehicles",
    price: 180,
    rating: 5,
    stock: true,
    color: "#b7d3dd",
    tag: "4 piece set",
    newest: 8,
    image: "assets/race-rod-cars-1.jpg",
    images: [
      "assets/race-rod-cars-1.jpg",
      "assets/race-rod-cars-2.jpg",
      "assets/race-rod-cars-3.jpg"
    ],
    description: "A four-piece wooden mini race car set with moving wheels, vibrant designs, and durable wooden construction.",
    details: [
      "4 unique designs in each pack",
      "Moving wheels for zooming play",
      "Durable wooden construction, approx. 100mm x 40mm x 20mm"
    ]
  },
  {
    name: "CVC Vowel Tree",
    category: "Learning Tools",
    price: 250,
    rating: 5,
    stock: true,
    color: "#ede2cc",
    tag: "Early reading",
    newest: 7,
    image: "assets/cvc-vowel-tree-1.jpg",
    images: [
      "assets/cvc-vowel-tree-1.jpg",
      "assets/cvc-vowel-tree-2.jpg",
      "assets/cvc-vowel-tree-3.jpg",
      "assets/cvc-vowel-tree-4.jpg",
      "assets/cvc-vowel-tree-5.jpg",
      "assets/cvc-vowel-tree-6.jpg"
    ],
    description: "Make early reading fun with a wooden vowel tree and word tiles for exploring real and nonsense words.",
    details: [
      "Includes wooden vowel tree, 50 word tiles, and wooden storage box",
      "Supports phonics, early reading, and word-building confidence",
      "Great for experimenting with vowel sounds and CVC words"
    ]
  },
  {
    name: "Number popper 1-10",
    category: "Learning Tools",
    price: 40,
    rating: 5,
    stock: true,
    color: "#cfe5d3",
    tag: "Numbers 1-10",
    newest: 6,
    image: "assets/number-popper-1-10-1.jpg",
    images: [
      "assets/number-popper-1-10-1.jpg",
      "assets/number-popper-1-10-2.jpg",
      "assets/number-popper-1-10-3.jpg",
      "assets/number-popper-1-10-4.jpg"
    ],
    description: "A sensory silicone number popper that makes counting and number recognition fun.",
    details: [
      "Covers numbers 1-10",
      "Sold individually, colour may vary",
      "Each number popper is approximately 10cm x 4cm"
    ]
  },
  {
    name: "Moveable Man and action cards",
    category: "Developmental Play",
    price: 150,
    rating: 5,
    stock: true,
    color: "#ead0da",
    tag: "24 cards",
    newest: 5,
    image: "assets/moveable-man-and-action-cards-1.jpg",
    images: [
      "assets/moveable-man-and-action-cards-1.jpg",
      "assets/moveable-man-and-action-cards-2.jpg",
      "assets/moveable-man-and-action-cards-3.jpg",
      "assets/moveable-man-and-action-cards-4.jpg",
      "assets/moveable-man-and-action-cards-5.jpg"
    ],
    description: "A Montessori-based activity for copying action cards and exploring all the moves a bendable wooden figure can make.",
    details: [
      "Includes a bendable wooden figure and 24 double-sided action cards",
      "Supports fine motor coordination and visual perception",
      "Wooden figure is approximately 24cm tall"
    ]
  },
  {
    name: "Alphabet Brain Challenge memory game",
    category: "Learning Tools",
    price: 140,
    rating: 5,
    stock: true,
    color: "#d2d6d5",
    tag: "Alphabet game",
    newest: 4,
    image: "assets/alphabet-brain-challenge-memory-game-1.jpg",
    images: [
      "assets/alphabet-brain-challenge-memory-game-1.jpg",
      "assets/alphabet-brain-challenge-memory-game-2.jpg",
      "assets/alphabet-brain-challenge-memory-game-3.jpg",
      "assets/alphabet-brain-challenge-memory-game-4.jpg"
    ],
    description: "A fun educational memory game that builds observation skills, vocabulary, and knowledge of alphabet initial sounds.",
    details: [
      "Designed for 2 or more players",
      "Uses picture cards, questions, timer, and dice-based prompts",
      "Supports memory, observation, vocabulary, and alphabet learning"
    ]
  },
  {
    name: "Blockables Town - 73 pieces",
    category: "Developmental Play",
    price: 890,
    rating: 5,
    stock: true,
    color: "#f5d4cb",
    tag: "Ages 2-7",
    newest: 3,
    image: "assets/blockables-town-73-pieces-1.jpg",
    images: [
      "assets/blockables-town-73-pieces-1.jpg",
      "assets/blockables-town-73-pieces-2.jpg",
      "assets/blockables-town-73-pieces-3.jpg",
      "assets/blockables-town-73-pieces-4.jpg",
      "assets/blockables-town-73-pieces-5.jpg"
    ],
    description: "A Melissa & Doug Blockables town play set with linkable, stackable wooden blocks for building a neighborhood playground and vehicle.",
    details: [
      "Includes 30 wooden blocks, 4 play figures, 32 connectors, felt pieces, wheels, and play guide",
      "Compatible with other Blockables play sets",
      "Encourages fine motor, problem-solving, matching, storytelling, and creative confidence"
    ]
  },
  {
    name: "Blockables Farm - 56 pieces",
    category: "Developmental Play",
    price: 695,
    rating: 5,
    stock: true,
    color: "#d8ece3",
    tag: "Ages 2-7",
    newest: 2,
    image: "assets/blockables-farm-56-pieces-1.jpg",
    images: [
      "assets/blockables-farm-56-pieces-1.jpg",
      "assets/blockables-farm-56-pieces-2.jpg",
      "assets/blockables-farm-56-pieces-3.jpg",
      "assets/blockables-farm-56-pieces-4.jpg",
      "assets/blockables-farm-56-pieces-5.jpg"
    ],
    description: "A Melissa & Doug Blockables farm play set for creating farm animals, equipment, and imaginative builds.",
    details: [
      "Includes 21 wooden blocks, 2 play figures, 22 connectors, wheels, felt pieces, and guide",
      "Build a tractor and trailer, cow, sheep, pig, horse, chicken, food, and hay bale",
      "Compatible with other Blockables play sets"
    ]
  },
  {
    name: "Blockables Safari - 34 pieces",
    category: "Developmental Play",
    price: 525,
    rating: 5,
    stock: true,
    color: "#b7d3dd",
    tag: "Ages 2-7",
    newest: 1,
    image: "assets/blockable-safari-34-pieces-1.jpg",
    images: [
      "assets/blockable-safari-34-pieces-1.jpg",
      "assets/blockable-safari-34-pieces-2.jpg",
      "assets/blockable-safari-34-pieces-3.jpg",
      "assets/blockable-safari-34-pieces-4.jpg",
      "assets/blockable-safari-34-pieces-5.jpg"
    ],
    description: "A Melissa & Doug Blockables safari play set for building safari animals and silly characters with linkable wooden blocks.",
    details: [
      "Includes 16 blocks, 15 connectors, felt animal pieces, 1 play figure, and illustrated instructions",
      "Build a zebra, alligator, lion, elephant, and giraffe",
      "Promotes fine motor skills, problem-solving, matching, and storytelling"
    ]
  },
  {
    name: "Match and Push Spinning Tops",
    category: "Developmental Play",
    price: 495,
    rating: 5,
    stock: true,
    color: "#ede2cc",
    tag: "Ages 2-5",
    newest: 0,
    image: "assets/match-and-push-spinning-tops-1.jpg",
    images: [
      "assets/match-and-push-spinning-tops-1.jpg",
      "assets/match-and-push-spinning-tops-2.jpg",
      "assets/match-and-push-spinning-tops-3.jpg",
      "assets/match-and-push-spinning-tops-4.jpg",
      "assets/match-and-push-spinning-tops-5.jpg",
      "assets/match-and-push-spinning-tops-6.jpg"
    ],
    description: "Drop colourful spinning tops into colour-matched wells and push with the easy-grasp plunger to make them spin.",
    details: [
      "Includes 3 uniquely shaped red, green, and blue tops, plunger tool, and sturdy wooden base",
      "Supports colour recognition, matching, cause-and-effect, and fine motor skills",
      "No batteries required"
    ]
  }
];

const state = {
  cart: [],
  category: "all",
  sort: "popular",
  maxPrice: 3000,
  inStock: true
};

const productGrid = document.querySelector("[data-product-grid]");
const productCount = document.querySelector("[data-product-count]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartItems = document.querySelector("[data-cart-items]");
const toastRegion = document.querySelector("[data-toast-region]");
const searchInput = document.querySelector("[data-search]");
const searchPanel = document.querySelector("[data-search-panel]");
const results = document.querySelector("[data-results]");
const productModal = document.querySelector("[data-product-modal]");
const productModalImage = document.querySelector("[data-product-modal-image]");
const productModalCategory = document.querySelector("[data-product-modal-category]");
const productModalTag = document.querySelector("[data-product-modal-tag]");
const productModalTitle = document.querySelector("[data-product-modal-title]");
const productModalDescription = document.querySelector("[data-product-modal-description]");
const productModalBenefits = document.querySelector("[data-product-modal-benefits]");
const productModalPrice = document.querySelector("[data-product-modal-price]");
const productModalAdd = document.querySelector("[data-product-modal-add]");
const productThumbs = document.querySelector("[data-product-thumbs]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
let currentProduct = null;
let currentImageIndex = 0;

function formatMoney(value) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(value);
}

function filteredProducts() {
  let list = products.filter((product) => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const priceMatch = product.price <= state.maxPrice;
    const stockMatch = !state.inStock || product.stock;
    return categoryMatch && priceMatch && stockMatch;
  });

  if (state.sort === "price-low") list = list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") list = list.sort((a, b) => b.price - a.price);
  if (state.sort === "new") list = list.sort((a, b) => b.newest - a.newest);
  if (state.sort === "popular") list = list.sort((a, b) => b.rating - a.rating);
  return list;
}

function renderProducts() {
  const list = filteredProducts();
  productCount.textContent = list.length;

  if (!list.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <strong>No products added yet</strong>
        <p>Send the toy names, prices, categories, and images when you are ready, and they will appear here in rands.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = list.map((product) => `
    <article class="product-card" tabindex="0" role="button" aria-label="View details for ${product.name}" data-view-product="${product.name}">
      <div class="product-art" style="--product-bg: ${product.color}">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy">` : ""}
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${product.category}</span><span>${product.rating} stars</span></div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-meta"><span>${product.tag}</span><span>${product.stock ? "In stock" : "Waitlist"}</span></div>
        <div class="product-footer">
          <strong>${formatMoney(product.price)}</strong>
          <button type="button" data-add-cart="${product.name}" ${product.stock ? "" : "disabled"}>${product.stock ? "Add" : "Notify"}</button>
        </div>
      </div>
    </article>
  `).join("");
}

function showToast(message) {
  toastRegion.textContent = message;
  toastRegion.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toastRegion.classList.remove("show"), 2600);
}

function updateCart() {
  cartCount.textContent = state.cart.length;
  const total = state.cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = formatMoney(total);

  if (!state.cart.length) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = state.cart.map((item) => `
    <div class="cart-line">
      <span class="mini-thumb" style="background:${item.color}" aria-hidden="true"></span>
      <strong>${item.name}</strong>
      <span>${formatMoney(item.price)}</span>
    </div>
  `).join("");
}

function addToCart(name) {
  const item = products.find((product) => product.name === name);
  if (!item) {
    showToast("No products have been added yet.");
    return;
  }

  state.cart.push(item);
  updateCart();
  showToast(`${item.name} added to cart`);
}

function renderModalImage() {
  if (!currentProduct) return;
  const images = currentProduct.images?.length ? currentProduct.images : [currentProduct.image];
  currentImageIndex = (currentImageIndex + images.length) % images.length;
  productModalImage.src = images[currentImageIndex] || "";
  productModalImage.alt = `${currentProduct.name} image ${currentImageIndex + 1}`;
  galleryPrev.hidden = images.length <= 1;
  galleryNext.hidden = images.length <= 1;
  productThumbs.hidden = images.length <= 1;
  productThumbs.innerHTML = images.map((image, index) => `
    <button type="button" class="${index === currentImageIndex ? "active" : ""}" data-gallery-thumb="${index}" aria-label="Show product image ${index + 1}">
      <img src="${image}" alt="">
    </button>
  `).join("");
}

function openProductDetails(name) {
  const product = products.find((item) => item.name === name);
  if (!product) return;

  currentProduct = product;
  currentImageIndex = 0;
  renderModalImage();
  productModalCategory.textContent = product.category;
  productModalTag.textContent = product.tag;
  productModalTitle.textContent = product.name;
  productModalDescription.textContent = product.description;
  productModalBenefits.innerHTML = product.details.map((detail) => `<li>${detail}</li>`).join("");
  productModalPrice.textContent = formatMoney(product.price);
  productModalAdd.dataset.addCart = product.name;
  productModal.hidden = false;
  document.body.classList.add("drawer-open");
  document.querySelector("[data-product-close]").focus();
}

function closeProductDetails() {
  productModal.hidden = true;
  document.body.classList.remove("drawer-open");
}

function changeGalleryImage(direction) {
  if (!currentProduct) return;
  currentImageIndex += direction;
  renderModalImage();
}

function renderSearch(query = "") {
  const cleanQuery = query.trim().toLowerCase();
  const matches = products
    .filter((product) => !cleanQuery || `${product.name} ${product.category} ${product.tag}`.toLowerCase().includes(cleanQuery))
    .slice(0, 5);

  results.innerHTML = matches.length ? matches.map((product) => `
    <button class="result-item" type="button" data-add-cart="${product.name}">
      <span class="mini-thumb" style="background:${product.color}" aria-hidden="true"></span>
      <span><strong>${product.name}</strong><br><small>${product.category} - ${product.tag}</small></span>
      <span>${formatMoney(product.price)}</span>
    </button>
  `).join("") : `
    <div class="result-item">
      <span class="mini-thumb" style="background:#d8ece3" aria-hidden="true"></span>
      <span><strong>No products added yet</strong><br><small>The real Kids Corner toy list can be added next.</small></span>
      <span></span>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-cart]");
  if (addButton && !addButton.disabled) {
    event.stopPropagation();
    addToCart(addButton.dataset.addCart);
    return;
  }

  const viewProduct = event.target.closest("[data-view-product]");
  if (viewProduct) openProductDetails(viewProduct.dataset.viewProduct);

  const toastButton = event.target.closest("[data-toast]");
  if (toastButton) showToast(toastButton.dataset.toast);

  const queryButton = event.target.closest("[data-query]");
  if (queryButton) {
    searchInput.value = queryButton.dataset.query;
    renderSearch(searchInput.value);
    searchInput.focus();
  }

  const collectionTile = event.target.closest("[data-collection-category]");
  if (collectionTile) {
    state.category = collectionTile.dataset.collectionCategory;
    document.querySelector("[data-filter-category]").value = state.category;
    renderProducts();
  }

  const thumb = event.target.closest("[data-gallery-thumb]");
  if (thumb) {
    currentImageIndex = Number(thumb.dataset.galleryThumb);
    renderModalImage();
  }
});

document.addEventListener("keydown", (event) => {
  const viewProduct = event.target.closest?.("[data-view-product]");
  if (viewProduct && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProductDetails(viewProduct.dataset.viewProduct);
  }
});

document.querySelector("[data-filter-category]").addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProducts();
});

document.querySelector("[data-sort]").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelector("[data-price]").addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  document.querySelector("[data-price-label]").textContent = formatMoney(state.maxPrice);
  renderProducts();
});

document.querySelector("[data-in-stock]").addEventListener("change", (event) => {
  state.inStock = event.target.checked;
  renderProducts();
});

document.querySelector("[data-menu-toggle]").addEventListener("click", (event) => {
  const panel = document.querySelector("[data-nav-panel]");
  const isOpen = panel.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("[data-mega-toggle]").addEventListener("click", () => {
  const mega = document.querySelector("[data-mega]");
  mega.hidden = !mega.hidden;
});

document.querySelector("[data-cart-open]").addEventListener("click", () => {
  document.querySelector("[data-cart]").hidden = false;
  document.body.classList.add("drawer-open");
});

document.querySelector("[data-cart-close]").addEventListener("click", () => {
  document.querySelector("[data-cart]").hidden = true;
  document.body.classList.remove("drawer-open");
});

document.querySelector("[data-product-close]").addEventListener("click", closeProductDetails);
productModal.addEventListener("click", (event) => {
  if (event.target === productModal) closeProductDetails();
});
galleryPrev.addEventListener("click", () => changeGalleryImage(-1));
galleryNext.addEventListener("click", () => changeGalleryImage(1));

document.querySelectorAll("[data-swatch]").forEach((button) => {
  button.style.setProperty("--swatch", button.dataset.swatch);
});

searchInput.addEventListener("focus", () => {
  searchPanel.hidden = false;
  renderSearch(searchInput.value);
});

searchInput.addEventListener("input", () => {
  searchPanel.hidden = false;
  renderSearch(searchInput.value);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchPanel.hidden = true;
    document.querySelector("[data-mega]").hidden = true;
    document.querySelector("[data-cart]").hidden = true;
    productModal.hidden = true;
    document.body.classList.remove("drawer-open");
  }
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Thanks. Early access is switched on.");
});

document.querySelector("[data-contact-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = formData.get("subject") || "Kids Corner website enquiry";
  const body = [
    `Name: ${formData.get("name") || ""}`,
    `Address: ${formData.get("address") || ""}`,
    `Email: ${formData.get("email") || ""}`,
    `Phone: ${formData.get("phone") || ""}`,
    "",
    formData.get("message") || ""
  ].join("\n");

  window.location.href = `mailto:kidscornerkzn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showToast("Opening your email app for Kids Corner.");
});

renderProducts();
renderSearch();
updateCart();
