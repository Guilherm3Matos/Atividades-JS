function média(){
    var numb1 = document.querySelector('#numb1').value;
    var numb2 = document.querySelector('#numb2').value;
    var numb3 = document.querySelector('#numb3').value;

    var result = (parseFloat(numb1) + parseFloat(numb2) + parseFloat(numb3)) / 3
    
    alert(result)
    
}