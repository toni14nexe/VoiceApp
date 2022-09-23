import sqlLink from './sqlLink'
var SQLlink = sqlLink.sqlLink();

export default{
    SignUp(){
        return SQLlink + 'addUser.php'
    },

    ForgotPassword(){
        return SQLlink + 'resetPassword.php'
    },

    NewPassword(){
        return SQLlink + 'newPassword.php'
    },

    LogIn(){
        return SQLlink + 'logIn.php'
    },

    Refresh(){
        return SQLlink + 'refreshToken.php'
    }
}