const formBtn = document.getElementById('form__btn');
const form = document.querySelector('.contact__form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const SERVICE_ID = 'service_6y1lh8e';
const TEMPLATE_ID = 'template_vtieh5n';
const USER_ID = "vbYDLmRvzUxoK8UPZ";

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    emailjs.init(USER_ID);
  })();

});


formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const templateParams = {
    to_name: 'Dalia',
    from_name: name.value,
    message: message.value,
    from: email.value,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(function (response) {
      if (response.status === 200) {
        form.reset()
        showToast('Email sent successfully!🥳')
      }
    }, function (error) {
      showToast('Something went wrong..😵‍💫')
    });
})
