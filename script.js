// pin generate button implementation
const pinGenerated = document.getElementById('generate-pin');
pinGenerated.addEventListener('click', function(){
    const pin = Math.round(Math.random()*10000);
    document.getElementById('pin-input').value = pin;

    document.getElementById('trial').innerText = 3;

    document.getElementById('failed-attempt').style.display = "none";
    document.getElementById('successful-attempt').style.display = "none";
});

// number buttons implementation
const numberBtn = document.getElementsByClassName('number-btn');
for(let i=0; i<10; i++)
{
    var typedNumber = '';
    numberBtn[i].addEventListener('click',function(){
        typedNumber += numberBtn[i].innerHTML;
        document.getElementById('typed-number').value = typedNumber;
    });
}

// implements submit button
const submitButton = document.getElementById('submitButton');
var count = 0;
submitButton.addEventListener('click', function(){
    const pin = document.getElementById('pin-input').value;
    trial = parseInt(document.getElementById('trial').innerText);
    if(trial >= 1)
    {
        if(pin == typedNumber)
        {
            document.getElementById('successful-attempt').style.display = "block";
            document.getElementById('failed-attempt').style.display = "none";
        }
        else
        {
            trial--;
            document.getElementById('trial').innerText = trial;
            document.getElementById('successful-attempt').style.display = "none";
            document.getElementById('failed-attempt').style.display = "block";
        }
    }
})

// clear button implementation
const clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    typedNumber = '';
    document.getElementById('typed-number').value = typedNumber;
});

// delete button implementation
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function(){
    typedNumber = typedNumber.slice(0, typedNumber.length - 1);
    document.getElementById('typed-number').value = typedNumber;
})
