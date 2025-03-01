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

const showToast = (message) => {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.classList = 'toast rounded--8'
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.right = '40px'
  }, 200)


  setTimeout(() => {
    toast.style.right = '-100%'
    setTimeout(() => {
      toast.remove()
    }, 200)
  }, 3000)
};


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
      if(response.status === 200){
        form.reset()
        showToast('Email sent successfully!🥳')
      }
    }, function (error) {
      showToast('Something went wrong 😵‍💫')
    });

})
