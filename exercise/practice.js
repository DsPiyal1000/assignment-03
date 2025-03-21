function CheckUserStatus (isLoggedIn) {
    if(isLoggedIn){
        let notify = "welcome back buddy"
        console.log(notify);
        
    } else {
        let notify = "log in first"
        console.log(notify);
        
    }
}
CheckUserStatus(false);