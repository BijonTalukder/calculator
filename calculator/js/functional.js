function calculate(input){
    document.getElementById('result').value+=input;


}

function Delate()
{

    document.getElementById('result').value='';
}
function result()
{
    var a= document.getElementById('result').value;
   
    var b=eval(a);
    document.getElementById('result').value=b;
   
}
