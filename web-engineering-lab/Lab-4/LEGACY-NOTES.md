# Lab 05 — Legacy jQuery Notes

## 1. jQuery to Native JavaScript


### 1. Document Ready

jQuery:
`$(document).ready(fn);`

Native JavaScript:
`document.addEventListener("DOMContentLoaded", fn);`

### 2. Get Input Value

jQuery:
`$("#name").val();`

Native JavaScript:
`document.querySelector("#name").value;`

### 3. Insert HTML After an Element

jQuery:
`$("#name").after(html);`

Native JavaScript:
`document.querySelector("#name").insertAdjacentHTML("afterend", html);`


### 4. Remove Error Messages

jQuery:
`$(".error").remove();`

Native JavaScript:
`document.querySelectorAll(".error").forEach(el => el.remove());`

### 5. Update Text and Show Element

jQuery:
`$("#status").text("Thanks!").hide().fadeIn(400);`

Native JavaScript:
`document.querySelector("#status").textContent = "Thanks!";`

Note: Native JavaScript has no direct fadeIn() method.
A CSS transition can be used for the animation.

### 6. Reset Form

jQuery:
`$form[0].reset();`

Native JavaScript:
`document.querySelector("form").reset();`



## 2. Three Legacy Code Smells


### 1. Using var Instead of let or const

Legacy code uses `var` to declare variables.

Modern JavaScript uses `let` and `const` because they provide better scope control.

### 2. Using $.trim()

Legacy jQuery uses `$.trim()` to remove extra spaces from strings.

Modern JavaScript uses the built-in `.trim()` method.

### 3. Building HTML Using Strings

Legacy code creates HTML elements using strings, such as `.after("<span>Error</span>")`.

Modern JavaScript can use `document.createElement()` and `textContent` to create elements more safely.
