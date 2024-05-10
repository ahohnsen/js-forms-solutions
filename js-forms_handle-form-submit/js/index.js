console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  /* Bonus
  const firstName = data.firstName;
  const age = Number(data.age);
  const badness = Number(data.badness);

  console.log(`The age-badness-sum of ${firstName} is ${age + badness}`);
  */

  event.target.reset();
  event.target.elements.firstName.focus();
});
