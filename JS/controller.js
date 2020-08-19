const controller = {}
controller.register = (data)=>{
    document.getElementById('Login-btn').addEventListener('click',() => {view.setActiveScreen('loginPage')})
    if(data.firstName ===''){
        document.getElementById('first-name-error').innerText='Please input your first name'
    }else{
        document.getElementById('first-name-error').innerText=''
    }
    if(data.lastName ===''){
        document.getElementById('last-name-error').innerText='Please input your last name'
    } else{
        document.getElementById('last-name-error').innerText=''
    }
    if(data.email ===''){
        document.getElementById('email-error').innerText='Please input your email'
    }else{
        document.getElementById('email-error').innerText=''
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(data.email)) { 
             alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
             email.focus; 
             return false; 
    }
    else{ 
             console.log('OK roi day, Email nay hop le.'); 
    } 
    if(data.password ===''){
        document.getElementById('password-error').innerText='Please input password. Password can not blank'
    }else{
        document.getElementById('password-error').innerText=''
        if(data.password !== data.confirmPassword){
            document.getElementById('confirm-password-error').innerText='Please confirm password. Confirm password not same'
        }else{
            document.getElementById('confirm-password-error').innerText=''
        }
    }
    
}

controller.login = (data)=>{
    document.getElementById('Register-btn').addEventListener('click',() => {view.setActiveScreen('registerPage')
console.log('chuyển trang')})
    if(data.email ===''){
        document.getElementById('email-error').innerText='Please input your email'
    }else{
        document.getElementById('email-error').innerText=''
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(data.email)) { 
             alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
             email.focus; 
             return false; 
    }
    else{ 
             console.log('OK roi day, Email nay hop le.'); 
    } 
    if(data.password ===''){
        document.getElementById('password-error').innerText='Please input password. Password can not blank'
    }else{
        document.getElementById('password-error').innerText=''
    }
    
}