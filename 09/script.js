function nota(){
    var numb1 = document.querySelector('#numb1').value;
    var numb2 = document.querySelector('#numb2').value;
    var numb3 = document.querySelector('#numb3').value;
    var aluno = document.querySelector('#aluno').value;

    var result = (parseFloat(numb1) + parseFloat(numb2) + parseFloat(numb3)) / 3

    if (result >= 6){ 
        alert("Parabéns!!! aluno " + aluno + " passou! Nota: " + result) 
    }
    
    else {
        alert("Reprovado!!! aluno " + aluno + " jegue! " + "Nota: " + result)
    }
    
}