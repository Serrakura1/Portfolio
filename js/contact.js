document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.querySelector(".contact__success");
  const button = document.getElementById("contactSubmit");
  const again = document.getElementById("contactAgain");
  const subtitle = document.querySelector(".contact__subtitle");

  if (!form) return;

  // Restore state
  if (localStorage.getItem("contactSent")) {
    form.style.display = "none";
    form.classList.add("form_sended");
    subtitle.style.display = "none";
    success.hidden = false;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    button.textContent = "Sending...";
    button.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        localStorage.setItem("contactSent", "true");
        form.style.display = "none";
        form.classList.add("form_sended");
        subtitle.style.display = "none";
        success.hidden = false;
      } else {
        throw new Error();
      }
    } catch {
      button.textContent = "Send message";
      button.disabled = false;
      alert("Something went wrong — please try again.");
    }
  });

  // Send another message
  if (again) {
    again.addEventListener("click", () => {
      localStorage.removeItem("contactSent");

      form.reset();
      form.style.display = "";
      form.classList.remove("form_sended");
      success.hidden = true;

      button.textContent = "Send message";
      button.disabled = false;
    });
  }
});
