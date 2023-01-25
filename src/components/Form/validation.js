export default function validation (userData) {
    const errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexpassword =  /^(?=\w*\d)\S{6,10}$/;

    const regexnumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i



    if(!regexEmail.test(userData.username)){
        errors.username = 'Must be an email adress'
    }
    if(!userData.username){
        errors.username = 'It cant be empty'
    }
    if(userData.username.length > 35){
        errors.username = 'Must be less than 35 characters'
    }
    if(!regexnumber.test(userData.password)){
        errors.password = 'The password must have a number'
    }
    if(!regexpassword.test(userData.password)){
        errors.password = 'Must have at least between 6 and 10 characters'
    }

    return errors;

}