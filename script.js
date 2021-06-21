function validation(){
    var fName = document.forms["myform"]["fname"].value;
    var lName = document.forms["myform"]["lname"].value;
    var num = document.forms["myform"]["num"].value;
    var email = document.forms["myform"]["email"].value;
    var passwords = document.forms["myform"]["password"].value;
    document.getElementById("submit").addEventListener("click", function(e) {
        e.preventDefault();
      });

    // fname.addEventListener('blur', nameVerify, true);
    if(fName ===""){
        document.getElementById('fname_error').innerHTML ="This field is required";
        fname.style.border ="1px solid red";
   
        return false;
    }
    if(fName.length <= 2){
        document.getElementById('fname_error').innerHTML ="You must enter a valid first name";
        fname.style.border ="1px solid red";
   
        return false;
    }
    if(!isNaN (fName)){
        document.getElementById('fname_error').innerHTML ="You must enter a valid first name";
        fname.style.border ="1px solid red";
   
        return false;
    }
    if(lName===""){
        document.getElementById('lname_error').innerHTML ="This field is required";
        lname.style.border ="1px solid red";
        return false;
    }
    if(lName.length <= 2){
        document.getElementById('lname_error').innerHTML ="You must enter a valid last name";
        lname.style.border ="1px solid red";
   
        return false;
    }
    if(!isNaN (lName)){
        document.getElementById('lname_error').innerHTML ="You must enter a valid first name";
        lname.style.border ="1px solid red";
   
        return false;
    }
    if(num ===""){
        document.getElementById('num_error').innerHTML ="This field is required";
        number.style.border ="1px solid red";
        return false;
    }
    if( num.length !== 10 ){
        document.getElementById('num_error').innerHTML ="You must enter valid phone number";
        number.style.border ="1px solid red";
        return false;
    }
    if(isNaN (num)){
        document.getElementById('num_error').innerHTML ="You must enter valid phone number";
        lname.style.border ="1px solid red";
   
        return false;
    }
    if(email ===""){
        document.getElementById('email_error').innerHTML ="This field is required";
        number.style.border ="1px solid red";
        return false;
    }
     if(email ==="@" || email ==="."){
        document.getElementById('num_error').innerHTML ="You must enter valid email id";
        number.style.border ="1px solid red";
        return false;
    }
    if(email.indexOf('@')<=0){
        document.getElementById('email_error').innerHTML ="You must enter valid email id";
        number.style.border ="1px solid red";
        return false;
    }
    if(passwords ===""){
        document.getElementById('pass_error').innerHTML ="This field is required";
        number.style.border ="1px solid red";
        return false;
    }
    if(paswords.length <= 8){
        document.getElementById('pass_error').innerHTML ="Your password must be at least 8 characters";
        password.style.border ="1px solid red";
   
        return false;
    }
    

}