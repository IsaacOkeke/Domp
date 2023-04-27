const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {
  button.addEventListener("click", event => {
    const row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
});

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {
  let count = 0;

  button.addEventListener("click", event => {
    const likeCount = event.target.nextElementSibling;
    count++;
    likeCount.textContent = count;
    button.classList.toggle("liked");
  });
});

// Get all the quantity input fields
const quantityInputs = document.querySelectorAll("tbody input[type='number']");

// Get all the remove buttons
removeButtons = document.querySelectorAll(".remove-btn");

// Calculate the total price of the cart
function calculateTotal() {
  let totalPrice = 0;
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const price = parseFloat(row.cells[1].textContent.substring(1));
    const quantity = parseInt(row.cells[2].querySelector("input[type='number']").value);
    const total = price * quantity;
    row.cells[3].textContent = "$" + total.toFixed(2);
    totalPrice += total;
  });

  document.querySelector("tfoot td:last-child").textContent = "$" + totalPrice.toFixed(2);
}

// Calculate the total price when the page loads
calculateTotal();

// Add event listeners to the quantity input fields
quantityInputs.forEach(input => {
  input.addEventListener("input", event => {
    calculateTotal();
  });
});

// Add event listeners to the remove buttons
removeButtons.forEach(button => {
  button.addEventListener("click", event => {
    const row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calculateTotal();
  });
});
