 const itens = document.querySelectorAll('.item');

  itens.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });

  function mostrarPedido() {
    const selecionados = document.querySelectorAll('.item.selected');
    const resultado = document.getElementById('resultado');

    if (selecionados.length === 0) {
      resultado.innerHTML = "Nenhum item selecionado.";
      return;
    }

    let total = 0;
    let lista = "<h3>Seu pedido:</h3><ul>";

    selecionados.forEach(item => {
      const texto = item.innerText;
      const preco = parseFloat(texto.match(/R\$ (\d+)/)[1]);
      total += preco;

      lista += `<li>${texto}</li>`;
    });

    lista += `</ul><strong>Total: R$ ${total}</strong>`;

    resultado.innerHTML = lista;
  }