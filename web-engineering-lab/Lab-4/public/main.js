import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");

const nextBooking = makeCounter();

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

    if (booked) {
        status.textContent =
            `Booking #${nextBooking()} confirmed for ${day}.`;
    } else {
        status.textContent =
            `${day} booking removed.`;
    }

});