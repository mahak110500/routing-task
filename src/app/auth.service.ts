export class AuthService{
    loggedIn : boolean = false;
    // loggedOut : boolean = true;


    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject) => {
                setTimeout( () =>{
                    resolve(this.loggedIn)
                }, 300);
            }
        );
        return promise;
    }

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}