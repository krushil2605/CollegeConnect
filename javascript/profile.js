function editProfile(field) {
    const currentValueElement = document.getElementById(field);
    const currentValue = currentValueElement.childNodes[0].nodeValue.trim(); // Get the text without the child button node
    const newValue = prompt(`Enter new ${field}:`, currentValue);

    if (newValue !== null && newValue !== "") {
      currentValueElement.childNodes[0].nodeValue = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${newValue}`; // Update the text without affecting the button
    }
  }

  function addToList(listId, promptMessage) {
    const newListValue = prompt(promptMessage);
    if (newListValue !== null && newListValue.trim() !== "") {
      const list = document.getElementById(listId);
      const li = document.createElement("li");
      li.textContent = newListValue;
      list.appendChild(li);
    }
  }

  function addTestimonial() {
    const newTestimonial = prompt("Write a testimonial:");
    if (newTestimonial !== null && newTestimonial.trim() !== "") {
      const testimonialList = document.querySelector(".box.testimonials ul");
      const li = document.createElement("li");
      li.textContent = `"${newTestimonial}"`;
      testimonialList.appendChild(li);
    }
  }
  // Light/Dark Mode Toggle
  const body = document.body;

  function toggleDarkMode() {
    body.classList.toggle("dark-mode");
  }