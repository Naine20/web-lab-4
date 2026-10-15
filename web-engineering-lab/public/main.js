// Task 11: import helper functions from utils.js
import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");

const nextBooking = makeCounter();

// Tasks 8, 9 and 11:
// One delegated click listener is placed on tbody.
tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");

  if (!button) {
    return;
  }

  const day = button.dataset.day;
  const row = button.closest("tr");

  console.log(day);

  status.textContent = `Updating ${day}...`;

  await delay(1000);

  const booked = row.classList.toggle("selected");
  const count = document.querySelectorAll("#schedule tr.selected").length;

  if (booked) {
    status.textContent =
      `Booking #${nextBooking()} confirmed for ${day}. ${count} slot(s) booked.`;
  } else {
    status.textContent =
      `${day} booking removed. ${count} slot(s) booked.`;
  }
});

// Prevent the demo feedback form from reloading the page.
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
