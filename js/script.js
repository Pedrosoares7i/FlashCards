document.querySelectorAll('.cartao').forEach((cartao) => {
  const toggle = () => cartao.classList.toggle('virado');

  cartao.addEventListener('click', toggle);

  cartao.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
});
