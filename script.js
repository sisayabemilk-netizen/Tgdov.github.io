// Tab switcher
function openTab(tabId, event) {
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}

// Forms success handler
function handleForm(formId) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();

    let successBox = document.getElementById("successMessage");
    successBox.classList.remove("hidden");

    setTimeout(() => {
      successBox.classList.add("hidden");
    }, 5000); // hide after 5s
  });
}

handleForm("buyerForm");
handleForm("sellerForm");
handleForm("feedbackForm");