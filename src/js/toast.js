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
