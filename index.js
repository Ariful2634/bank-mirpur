document.getElementById('sub-btn').addEventListener('click', function(){
    const email = document.getElementById('email');
    const mail = email.value;
    const pass = document.getElementById('pass');
    const password = pass.value;
    email.value =''
    pass.value=''

    if(mail=='arif@islam.com' && password == 3059){
        window.location.href='bank.html'
    }
    else{
        alert('Wrong Email or Password')
    }
    
})