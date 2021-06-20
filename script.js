function validation(){
    var fName = document.forms["myform"]["fname"].value;
    var lName = document.forms["myform"]["lname"].value;
    var num = document.forms["myform"]["num"].value;
    var email = document.forms["myform"]["email"].value;
    var password = document.forms["myform"]["password"].value;

    // fname.addEventListener('blur', nameVerify, true);
    if(fName ===""){
        document.getElementById('fname_error').innerHTML ="This field is required";
        fname.style.border ="1px solid red";
   
        return false;
    }
    if(lName===""){
        document.getElementById('lname_error').innerHTML ="This field is required";
        lname.style.border ="1px solid red";
        return false;
    }
    if(num ===""){
        document.getElementById('num_error').innerHTML ="This field is required";
        number.style.border ="1px solid red";
        return false;
    }
    else if( num !== 10){
        document.getElementById('num_error').innerHTML ="You must enter valid phone number";
        number.style.border ="1px solid red";
        return false;
    }
    if(email ===""){
        document.getElementById('pass_error').innerHTML ="This field is required";
        number.style.border ="1px solid red";
        return false;
    }
    else if(email ==="@" || email ===".com"){
        document.getElementById('num_error').innerHTML ="You must enter valid email id";
        number.style.border ="1px solid red";
        return false;
    }
    

}