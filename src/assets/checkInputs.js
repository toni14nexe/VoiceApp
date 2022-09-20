export default{
    checkFirstname(firstname){
        if(firstname == null) return 'Empty firstname!'
        else if(firstname.length == 0) return 'Empty firstname!'
        else if(firstname.length < 3) return 'Too short firstname!'
        else return null
    },

    checkLastname(lastname){
        if(lastname == null) return 'Empty lastname!'
        else if(lastname.length == 0) return 'Empty lastname!'
        else if(lastname.length < 3) return 'Too short lastname!'
        else return null
    },

    checkEmail(email){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email == null) return 'Empty email!'
        if(email.length == 0) return 'Empty email!'
        else if(email.match(validRegex)) return null
        else return 'Invalid email!'
    },

    checkPassword(password){
        var message = 'Password missing: '
        if(password == null) return 'Empty password!'
        else if(password.length == 0) return 'Empty password!'
        else if(password.length < 8) return 'Too short password!'
        if(!password.match(/[A-Z]/g)) message += 'capital letter'
        if(!password.match(/[a-z]/g)){
            if(message.length > 18) message += ', '
            message += 'lowercase letter'
        }
        if(!password.match(/[0-9]/g)){
            if(message.length > 18) message += ', '
            message += 'number'
        }
        if(message.length > 18) return message
        return null
    },

    checkPasswordLength(password){
        if(password == null) return 'Empty password!'
        else if(password.length == 0) return 'Empty password!'
        else if(password.length < 8) return 'Too short password!'
    },

    checkPasswordConfirm(password, passwordConfirm){
        if(passwordConfirm == null) return 'Empty field!'
        else if(passwordConfirm.length == 0) return 'Empty field!'
        else if(password != passwordConfirm) return 'Passwords do not match!'
        return null
    }
}