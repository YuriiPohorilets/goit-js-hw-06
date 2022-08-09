const formRef = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled!');
  } else {
    const userObj = {
      email: email.value,
      password: password.value,
    };

    event.currentTarget.reset();

    console.log(userObj);
  }
}

formRef.addEventListener('submit', onFormSubmit);
