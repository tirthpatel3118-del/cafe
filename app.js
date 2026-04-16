const fallbackMenuCategories = [
  {
    id: "coffee-tea",
    name: "Coffee & Tea",
    items: [
      { id: "cafe-latte", name: "Cafe Latte", price: 120, description: "Smooth milk coffee." },
      { id: "cappuccino", name: "Cappuccino", price: 110, description: "Foamy and quick to serve." },
      { id: "masala-tea", name: "Tea (Masala/Ginger)", price: 50, description: "Comfort tea for all-day orders." },
      { id: "irish-coffee", name: "Irish Coffee", price: 140, description: "Bold coffee with creamy finish." },
      { id: "hazelnut-latte", name: "Hazelnut Latte", price: 145, description: "Sweet nutty latte." },
      { id: "hot-chocolate", name: "Hot Chocolate", price: 130, description: "Rich, warm chocolate drink." }
    ]
  },
  {
    id: "shakes-smoothies",
    name: "Shakes & Smoothies",
    items: [
      { id: "vanilla-shake", name: "Vanilla Shake", price: 140, description: "Classic milkshake." },
      { id: "oreo-shake", name: "Oreo Shake", price: 160, description: "Crushed cookies blended in." },
      { id: "brownie-shake", name: "Brownie Shake", price: 175, description: "Heavy dessert shake." },
      { id: "recharge-shake", name: "Recharge Shake", price: 185, description: "House special signature shake." },
      { id: "mix-berry-smoothie", name: "Mix Berry Smoothie", price: 180, description: "Fresh fruit blend." },
      { id: "strawberry-smoothie", name: "Strawberry Smoothie", price: 170, description: "Light and refreshing." }
    ]
  },
  {
    id: "coolers-soda",
    name: "Coolers & Soda",
    items: [
      { id: "mojito", name: "Mojito", price: 110, description: "Minty sparkling cooler." },
      { id: "blue-lagoon", name: "Blue Lagoon", price: 120, description: "Bright citrus cooler." },
      { id: "fresh-lime-soda", name: "Fresh Lime Soda", price: 70, description: "Fast and refreshing." },
      { id: "masala-soda", name: "Masala Soda", price: 60, description: "Spiced soda favorite." },
      { id: "lemon-ice-tea", name: "Lemon Ice Tea", price: 95, description: "Cooling tea-based drink." },
      { id: "strawberry-lemonade", name: "Strawberry Lemonade", price: 110, description: "Sweet and citrusy." }
    ]
  },
  {
    id: "sandwiches-panini",
    name: "Sandwiches & Panini",
    items: [
      { id: "grill-cheese-sandwich", name: "Grill Cheese Sandwich", price: 130, description: "Simple grilled sandwich." },
      { id: "chilly-cheese-sandwich", name: "Chilly Cheese Sandwich", price: 145, description: "Spicy cheese filling." },
      { id: "club-sandwich", name: "Club Sandwich", price: 165, description: "Layered cafe-style sandwich." },
      { id: "recharge-club-sandwich", name: "Recharge Club Sandwich", price: 185, description: "House special loaded sandwich." }
    ]
  },
  {
    id: "garlic-bread-fries",
    name: "Garlic Bread & Fries",
    items: [
      { id: "garlic-bread", name: "Garlic Bread", price: 90, description: "Crisp and easy add-on." },
      { id: "cheese-garlic-bread", name: "Cheese Garlic Bread", price: 120, description: "Cheesy garlic toast." },
      { id: "chilly-cheese-garlic-bread", name: "Chilly Cheese Garlic Bread", price: 130, description: "Spicy cheese toast." },
      { id: "french-fries", name: "French Fries", price: 95, description: "Crisp side dish." },
      { id: "peri-peri-fries", name: "Peri Peri Fries", price: 110, description: "Fries with peri peri seasoning." },
      { id: "cheese-fries", name: "Cheese Fries", price: 130, description: "Loaded cheesy fries." }
    ]
  },
  {
    id: "pasta-pizza",
    name: "Pasta & Pizza",
    items: [
      { id: "baked-macaroni-cheese", name: "Baked Macaroni & Cheese", price: 180, description: "Baked cheesy pasta." },
      { id: "pasta-marinara", name: "Pasta In Marinara Sauce", price: 210, description: "Tomato sauce pasta." },
      { id: "pasta-alfredo", name: "Pasta In Alfredo Sauce", price: 220, description: "Creamy white sauce pasta." },
      { id: "margherita-pizza", name: "Margherita Pizza (6 in)", price: 170, description: "Classic starter pizza." },
      { id: "veggie-lovers-pizza", name: "Veggie Lover's Pizza (9 in)", price: 310, description: "Loaded veg pizza." },
      { id: "recharge-fire-pizza", name: "Recharge Fire Pizza (9 in)", price: 335, description: "House spicy pizza." }
    ]
  },
  {
    id: "soups-chinese",
    name: "Soups & Chinese",
    items: [
      { id: "veg-classic-soup", name: "Veg Classic Soup", price: 110, description: "Warm light soup." },
      { id: "hot-sour-soup", name: "Hot & Sour Soup", price: 120, description: "Tangy and spicy." },
      { id: "veg-manchurian", name: "Veg Manchurian", price: 180, description: "Dry or gravy option." },
      { id: "paneer-chilly", name: "Paneer Chilly", price: 220, description: "Dry or gravy option." },
      { id: "hakka-noodles", name: "Hakka Noodles", price: 190, description: "Popular main course." },
      { id: "veg-fried-rice", name: "Veg Fried Rice", price: 180, description: "Quick wok rice." }
    ]
  },
  {
    id: "egg-store",
    name: "Egg Store",
    items: [
      { id: "boil-egg", name: "Boil Egg", price: 40, description: "Quick side add-on." },
      { id: "omelette", name: "Omelette", price: 80, description: "Simple egg order." },
      { id: "egg-bhurji-pav", name: "Egg Bhurji With Pav", price: 120, description: "Street-style favorite." },
      { id: "egg-curry-paratha", name: "Egg Curry With Paratha", price: 170, description: "Full meal option." },
      { id: "egg-chilli-tawa", name: "Egg Chilli Tawa With Paratha", price: 180, description: "Spicy combo." },
      { id: "egg-fried-rice", name: "Egg Fried Rice", price: 180, description: "Fast meal choice." }
    ]
  },
  {
    id: "punjabi-meal",
    name: "Punjabi Meal",
    items: [
      { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 240, description: "Rich gravy favorite." },
      { id: "paneer-makhani", name: "Paneer Makhani", price: 250, description: "Creamy paneer gravy." },
      { id: "palak-paneer", name: "Palak Paneer", price: 230, description: "Spinach paneer main." },
      { id: "veg-makhanwala", name: "Veg Makhanwala", price: 220, description: "Butter gravy vegetables." },
      { id: "sweet-lassi", name: "Sweet Lassi", price: 90, description: "Cooling yogurt drink." },
      { id: "masala-buttermilk", name: "Masala Buttermilk", price: 60, description: "Light drink with meals." }
    ]
  },
  {
    id: "rice-dal",
    name: "Rice & Dal",
    items: [
      { id: "plain-rice", name: "Plain Rice", price: 110, description: "Basic rice portion." },
      { id: "jeera-rice", name: "Jeera Rice", price: 135, description: "Cumin rice." },
      { id: "dal-fry", name: "Dal Fry", price: 140, description: "Popular everyday dal." },
      { id: "dal-tadka", name: "Dal Tadka", price: 150, description: "Tadka finish." },
      { id: "butter-roti", name: "Wheat Butter Roti", price: 25, description: "Soft butter roti." },
      { id: "paratha", name: "Paratha", price: 35, description: "Simple bread add-on." }
    ]
  },
  {
    id: "burgers-rolls",
    name: "Burgers & Rolls",
    items: [
      { id: "veg-burger", name: "Veg Burger", price: 120, description: "Quick serving burger." },
      { id: "cheese-burger", name: "Cheese Burger", price: 140, description: "Cheese loaded burger." },
      { id: "chipotle-burger", name: "Spicy Chipotle Cheese Burger", price: 160, description: "Spicy burger option." },
      { id: "veg-frankie", name: "Veg Frankie", price: 110, description: "Wrapped snack item." },
      { id: "paneer-frankie", name: "Veg. Tandoori Paneer Frankie", price: 140, description: "Paneer roll option." },
      { id: "cheese-roll", name: "Garlic Herbs Cheese Roll", price: 150, description: "Cheesy savory roll." }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { id: "pancake-maple", name: "Pan Cake With Maple Syrup", price: 150, description: "Breakfast-style sweet." },
      { id: "pancake-nutella", name: "Pan Cake With Nutella", price: 180, description: "Sweet chocolate pancake." },
      { id: "classic-waffle", name: "Classic Waffle", price: 190, description: "Served with maple syrup." },
      { id: "nutella-waffle", name: "Nutella Waffle", price: 220, description: "Nutella and ice cream." },
      { id: "chocolate-waffle", name: "Chocolate Waffle", price: 210, description: "Chocolate topped waffle." },
      { id: "sizzling-brownie", name: "Sizzling Brownie", price: 210, description: "Hot dessert favorite." }
    ]
  },
  {
    id: "cold-drinks",
    name: "Cold Drinks",
    items: [
      { id: "coca-cola", name: "Coca Cola", price: 45, description: "Chilled bottle." },
      { id: "sprite", name: "Sprite", price: 45, description: "Chilled bottle." },
      { id: "thums-up", name: "Thums Up", price: 45, description: "Chilled bottle." },
      { id: "water-500", name: "Water Bottle (500ml)", price: 20, description: "Regular bottle." },
      { id: "water-1l", name: "Water Bottle (1 ltr)", price: 30, description: "Large bottle." },
      { id: "maaza", name: "Maaza", price: 45, description: "Fruit drink." }
    ]
  }
];

const menuCategories = window.RECHARGE_MENU || fallbackMenuCategories;

const itemLookup = menuCategories.flatMap((category) =>
  category.items.map((item) => [item.id, { ...item, categoryId: category.id, categoryName: category.name }])
).reduce((map, [id, item]) => {
  map[id] = item;
  return map;
}, {});

const state = {
  selectedTable: 1,
  selectedCategory: menuCategories[0].id,
  search: "",
  cart: {},
  editingOrderId: null,
  orders: loadOrders()
};

const tablesGrid = document.getElementById("tablesGrid");
const categoryFilters = document.getElementById("categoryFilters");
const menuGrid = document.getElementById("menuGrid");
const cartList = document.getElementById("cartList");
const ordersList = document.getElementById("ordersList");
const searchInput = document.getElementById("searchInput");
const selectedTableText = document.getElementById("selectedTableText");
const cartTableText = document.getElementById("cartTableText");
const cartCountText = document.getElementById("cartCountText");
const cartTotalText = document.getElementById("cartTotalText");
const placeOrderButton = document.getElementById("placeOrderButton");
const cartModeBanner = document.getElementById("cartModeBanner");
const cancelEditButton = document.getElementById("cancelEditButton");

function loadOrders() {
  try {
    const saved = localStorage.getItem("recharge-cafe-orders");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveOrders() {
  localStorage.setItem("recharge-cafe-orders", JSON.stringify(state.orders));
}

function getCartItems() {
  return Object.values(state.cart);
}

function getCartCount() {
  return getCartItems().reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return getCartItems().reduce((total, item) => total + item.price * item.quantity, 0);
}

function formatCurrency(amount) {
  return `Rs. ${amount}`;
}

function getLatestOrderForTable(tableNumber) {
  return state.orders.find((order) => order.tableNumber === tableNumber && order.status !== "paid") || null;
}

function getTableStatus(tableNumber) {
  const order = getLatestOrderForTable(tableNumber);
  if (!order) {
    return "empty";
  }

  if (order.status === "ready") {
    return "ready";
  }

  return "occupied";
}

function getStatusLabel(status) {
  if (status === "ready") {
    return "Ready";
  }

  if (status === "preparing") {
    return "Preparing";
  }

  if (status === "paid") {
    return "Paid";
  }

  return "Pending";
}

function renderTables() {
  const tableCards = Array.from({ length: 12 }, (_, index) => {
    const tableNumber = index + 1;
    const status = getTableStatus(tableNumber);
    const selectedClass = state.selectedTable === tableNumber ? "is-selected" : "";
    const statusText = status === "empty" ? "Empty" : status === "ready" ? "Ready" : "Active";
    const statusClass = status === "ready" ? "dot-ready" : status === "occupied" ? "dot-occupied" : "dot-empty";

    return `
      <button class="table-card ${selectedClass}" type="button" data-table-number="${tableNumber}">
        <strong>Table ${tableNumber}</strong>
        <span>${statusText} table</span>
        <small class="table-status"><i class="dot ${statusClass}"></i>${statusText}</small>
      </button>
    `;
  }).join("");

  tablesGrid.innerHTML = tableCards;
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = menuCategories.map((category) => `
    <button
      class="category-chip ${category.id === state.selectedCategory ? "is-active" : ""}"
      type="button"
      data-category-id="${category.id}"
    >
      ${category.name}
    </button>
  `).join("");
}

function renderMenu() {
  const activeCategory = menuCategories.find((category) => category.id === state.selectedCategory);
  const searchTerm = state.search.trim().toLowerCase();
  const items = activeCategory.items.filter((item) => {
    if (!searchTerm) {
      return true;
    }

    return `${item.name} ${item.description}`.toLowerCase().includes(searchTerm);
  });

  if (!items.length) {
    menuGrid.innerHTML = `
      <div class="empty-state">
        <h3>No items found</h3>
        <p>Try a different search for this category.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = items.map((item) => `
    <article class="menu-card">
      <div>
        <small>${activeCategory.name}</small>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="menu-card-footer">
        <span class="price-text">${formatCurrency(item.price)}</span>
        <button class="secondary-button" type="button" data-add-item="${item.id}">Add</button>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const cartItems = getCartItems();
  const itemCount = getCartCount();
  const total = getCartTotal();
  const editingOrder = state.orders.find((order) => order.id === state.editingOrderId) || null;

  selectedTableText.textContent = `Table ${state.selectedTable}`;
  cartTableText.textContent = `Table ${state.selectedTable}`;
  cartCountText.textContent = String(itemCount);
  cartTotalText.textContent = formatCurrency(total);
  placeOrderButton.disabled = cartItems.length === 0;
  placeOrderButton.textContent = editingOrder ? "Update Order" : "Place Order";

  if (editingOrder) {
    cartModeBanner.textContent = `Editing ${editingOrder.id} for Table ${editingOrder.tableNumber}. Saving will update the placed order.`;
    cartModeBanner.classList.remove("is-hidden");
    cancelEditButton.classList.remove("is-hidden");
  } else {
    cartModeBanner.classList.add("is-hidden");
    cancelEditButton.classList.add("is-hidden");
  }

  if (!cartItems.length) {
    cartList.innerHTML = `
      <div class="empty-state">
        <h3>${editingOrder ? "Edit basket is empty" : "Cart is empty"}</h3>
        <p>${editingOrder ? "Add items to update this placed order." : "Add items from the menu to build the order."}</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = cartItems.map((item) => `
    <div class="cart-item">
      <div>
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-meta">${formatCurrency(item.price)} each</div>
      </div>
      <div class="quantity-controls">
        <button class="icon-button" type="button" data-quantity-change="${item.id}" data-delta="-1">-</button>
        <strong>${item.quantity}</strong>
        <button class="icon-button" type="button" data-quantity-change="${item.id}" data-delta="1">+</button>
      </div>
    </div>
  `).join("");
}

function renderOrders() {
  const activeOrders = state.orders.filter((order) => order.status !== "paid");

  if (!activeOrders.length) {
    ordersList.innerHTML = `
      <div class="empty-state">
        <h3>No active orders</h3>
        <p>Placed orders will appear here with their current status.</p>
      </div>
    `;
    return;
  }

  ordersList.innerHTML = activeOrders.map((order) => {
    const orderedAt = new Date(order.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const isEditing = state.editingOrderId === order.id;

    return `
      <article class="order-card">
        <div class="order-top">
          <div>
            <h3>Table ${order.tableNumber}</h3>
            <small>${order.id} - ${orderedAt}</small>
          </div>
          <span class="status-chip status-${order.status}">${getStatusLabel(order.status)}</span>
        </div>
        <ul class="order-items">
          ${order.items.map((item) => `<li>${item.name} x ${item.quantity}</li>`).join("")}
        </ul>
        <div class="order-footer">
          <div>
            <small>Total</small>
            <strong>${formatCurrency(order.total)}</strong>
          </div>
          <div class="order-actions">
            <button class="ghost-button status-action" type="button" data-edit-order="${order.id}">${isEditing ? "Editing Now" : "Edit Order"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function addToCart(itemId) {
  const item = itemLookup[itemId];
  const current = state.cart[itemId];

  state.cart[itemId] = current
    ? { ...current, quantity: current.quantity + 1 }
    : { id: item.id, name: item.name, price: item.price, quantity: 1 };

  renderCart();
}

function changeQuantity(itemId, delta) {
  const current = state.cart[itemId];
  if (!current) {
    return;
  }

  const nextQuantity = current.quantity + delta;

  if (nextQuantity <= 0) {
    delete state.cart[itemId];
  } else {
    state.cart[itemId] = { ...current, quantity: nextQuantity };
  }

  renderCart();
}

function placeOrder() {
  const cartItems = getCartItems();
  if (!cartItems.length) {
    return;
  }

  const nextItems = cartItems.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price
  }));
  const total = getCartTotal();

  if (state.editingOrderId) {
    state.orders = state.orders.map((order) => (
      order.id === state.editingOrderId
        ? {
            ...order,
            tableNumber: state.selectedTable,
            items: nextItems,
            total,
            status: "pending",
            timestamp: new Date().toISOString()
          }
        : order
    ));
  } else {
    const order = {
      id: `RC-${Date.now()}`,
      tableNumber: state.selectedTable,
      items: nextItems,
      total,
      status: "pending",
      timestamp: new Date().toISOString()
    };

    state.orders.unshift(order);
  }

  state.cart = {};
  state.editingOrderId = null;
  saveOrders();
  render();
}

function startEditingOrder(orderId) {
  const order = state.orders.find((entry) => entry.id === orderId);
  if (!order) {
    return;
  }

  state.editingOrderId = order.id;
  state.selectedTable = order.tableNumber;
  state.search = "";
  state.cart = order.items.reduce((cart, item) => {
    cart[item.id] = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    };
    return cart;
  }, {});

  if (order.items.length) {
    const firstItem = itemLookup[order.items[0].id];
    if (firstItem) {
      state.selectedCategory = firstItem.categoryId;
    }
  }

  render();
}

function cancelEditing() {
  state.editingOrderId = null;
  state.cart = {};
  render();
}

function render() {
  searchInput.value = state.search;
  renderTables();
  renderCategoryFilters();
  renderMenu();
  renderCart();
  renderOrders();
}

tablesGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-table-number]");
  if (!button) {
    return;
  }

  state.selectedTable = Number(button.dataset.tableNumber);
  renderTables();
  renderCart();
  selectedTableText.textContent = `Table ${state.selectedTable}`;
  cartTableText.textContent = `Table ${state.selectedTable}`;
});

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category-id]");
  if (!button) {
    return;
  }

  state.selectedCategory = button.dataset.categoryId;
  renderCategoryFilters();
  renderMenu();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-item]");
  if (!button) {
    return;
  }

  addToCart(button.dataset.addItem);
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity-change]");
  if (!button) {
    return;
  }

  changeQuantity(button.dataset.quantityChange, Number(button.dataset.delta));
});

placeOrderButton.addEventListener("click", placeOrder);
cancelEditButton.addEventListener("click", cancelEditing);

ordersList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-order]");
  if (editButton) {
    startEditingOrder(editButton.dataset.editOrder);
  }
});

render();
