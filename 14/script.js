let janela;

function abrir() {
    janela = window.open("aba.html", "", "width=600,height=400");
}

function fechar() {
    janela.close();
}

function verificar() {
    if (janela.closed) { 
    alert("A janela está fechada.");
  } else {
    alert("A janela está aberta.");
  }
}
