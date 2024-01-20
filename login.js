    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    
    function signup(e){
        e.preventDefault();
        console.log('Submitted....');
        var name =document.getElementById('name').value;
        var email =document.getElementById('email').value;
        var password =document.getElementById('password').value;
        var password2 =document.getElementById('password2').value;

        var msg=document.getElementById('msg');
        
        if(name=='' || email==''||password=='' || password2==''){
            msg.className="alert alert-danger";
            
            msg.innerHTML='please fill out all fields';
        } else{
            if(name.length<3){
                msg.innerHTML='Name must be atleast three characters';
            } else{
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if(atpos<1 || dotpos < atpos+2 || dotpos+2 >=email.length){
                    msg.innerHTML ='Please use valid email';
                } else{
                    if(password != password2){
                        msg.innerHTML='Password do not match'
                    } else{
					msg.innerHTML =name+' is registered with email:'+email
				}
				
			}
			
            
			;
		}
		
	}	
}
document.getElementById('signupForm').addEventListener('submit',signup,false);