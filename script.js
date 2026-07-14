function simularRastreio() {
  const codigo = document.getElementById('tracking-code').value.trim().toUpperCase();
 const resultado = document.getElementById('tracking-result');
  
  if (codigo === "") {
    alert("Por favor, insira um código de rastreio válido!");
    return;
  }
  
  // Torna a caixa de resultados visível
  resultado.style.display = 'block';
  document.getElementById('res-codigo').innerText = codigo;
  
  // Simulação fictícia baseada no código digitado
  if (codigo.includes("ENTREGUE")) {
    document.getElementById('res-badge').innerText = "Entregue";
    document.getElementById('res-badge').style.color = "#25d366";
    document.getElementById('res-badge').style.backgroundColor = "rgba(37,211,102,0.2)";
    document.getElementById('res-badge').style.borderColor = "#25d366";
    document.getElementById('time-transport').classList.add('active');
    document.getElementById('time-delivered').classList.add('active');
    document.getElementById('res-situacao').innerText = "Carga entregue com sucesso ao destinatário final.";
  } else {
    // Padrão: Em transporte
    document.getElementById('res-badge').innerText = "Em Transporte";
    document.getElementById('res-badge').style.color = "#e74c3c";
    document.getElementById('res-badge').style.backgroundColor = "rgba(231,76,60,0.2)";
    document.getElementById('res-badge').style.borderColor = "#e74c3c";
    document.getElementById('time-transport').classList.add('active');
    document.getElementById('time-delivered').classList.remove('active');
    document.getElementById('res-situacao').innerText = "O profissional está a caminho do endereço de destino.";
  }
}
