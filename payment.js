function selectPayment(paymentMethod) {
    // Lógica para processar a seleção da forma de pagamento
    console.log(`Forma de pagamento selecionada: ${paymentMethod}`);
  }
  function selectPayment(paymentMethod) {
    // Lógica para processar a seleção da forma de pagamento
    console.log(`Forma de pagamento selecionada: ${paymentMethod}`);
    
    // Exibe a mensagem informando que está em construção
    if (paymentMethod === 'Débito' || paymentMethod === 'Pix') {
      const messageElement = document.getElementById('payment-message');
      messageElement.textContent = 'Opção de pagamento em construção. Desculpe pelo transtorno!';
      messageElement.style.display = 'block';
    }
  }