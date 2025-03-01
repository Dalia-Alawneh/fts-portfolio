const formBtn = document.getElementById('form__btn');
const form = document.querySelector('.contact__form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
document.addEventListener('DOMContentLoaded', function () {

  (function () {
    emailjs.init("vbYDLmRvzUxoK8UPZ");
  })();

});

formBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const templateParams = {
    to_name: 'Dalia',
    from_name: name.value,
    message: message.value,
    from: email.value,
  };
  emailjs.send('service_6y1lh8e', 'template_vtieh5n', templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      form.reset()
    }, function (error) {
      console.log('FAILED...', error);
    });

})
