function média(){
    var numb1 = document.querySelector('#numb1').value;
    var numb2 = document.querySelector('#numb2').value;
    var numb3 = document.querySelector('#numb3').value;
    var peso1 = document.querySelector('#peso1').value;
    var peso2 = document.querySelector('#peso2').value;
    var peso3 = document.querySelector('#peso3').value;

    var pesos = parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3)
    var result = (parseFloat(numb1) * parseFloat(peso1) + parseFloat(numb2) * parseFloat(peso2) + parseFloat(numb3) * parseFloat(peso3)) / pesos
    
    alert(result)
    
}