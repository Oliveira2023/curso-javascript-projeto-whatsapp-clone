
//const firebase = require('firebase')
//require('firebase/firestore')
import firebase from "firebase";
//import 'firebase/auth'

export class Firebase {

    constructor(){
        
        this._config = {

            apiKey: "AIzaSyAVZcqgiB6zJTS2hdQxcLpT_BeBqzeLi_o",
            authDomain: "whatapp-clone-b13cd.firebaseapp.com",
            projectId: "whatapp-clone-b13cd",
            storageBucket: "whatapp-clone-b13cd.appspot.com",
            messagingSenderId: "338893482228",
            appId: "1:338893482228:web:aecf6391662c91926ed6a1"

        }
        this.init()
    }

    init(){

        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots:true
            })

            window._initializedFirebase =  true
        }
        
    }

    static db(){

        return firebase.firestore()
    }

    static hd(){

        return firebase.storage()
    }

    initAuth(){
        
        
        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider).then(result=>{

                let token = result.credential.accessToken
                let user = result.user

                s({
                    user, 
                    token
                })

            }).catch(err=>{
                f(err)
            })

        })
    }

}