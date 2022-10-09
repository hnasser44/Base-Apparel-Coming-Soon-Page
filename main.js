

const email = document.getElementById('email')

document.querySelector(".arrow-icon").addEventListener("click", () => {
  if (validateEmail(email.value))
    location.reload();
})

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

