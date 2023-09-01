import { Model } from "./model";
import { Firebase } from "../util/Firebase";

export class Chat extends Model{

    constructor(){
        super()

    }

    get users() {this._data.users}
    set users(value) {this._data.users = value}

    get timeStamp() {this._data.timeStamp}
    set timeStamp(value) {this._data.timeStamp = value}

    static getRef(){

        return Firebase.db().collection('/chats')
    }

    static create(meEmail, contactEmail){
        console.log('CREATE')
        return new Promise((s, f)=>{

            let users = {}

            users[btoa(meEmail)] = true
            users[btoa(contactEmail)] = true

            Chat.getRef().add({
                user: contactEmail,
                timeStamp: new Date()
            }).then(doc=>{

                Chat.getRef().doc(doc.id).get().then(chat=>{

                    s(chat)

                }).catch(err=>{
                    f(err)
                })
            }).catch(err=>{ f(err)})
        })
    }

    static find(meEmail, contactEmail){

        return Chat.getRef()
        .where(btoa(meEmail), '==', true)
        .where(btoa(contactEmail), '==', true)
        .get()
    }

    static createIfNotExists(meEmail, contactEmail){

        return new Promise((s, f)=>{
            console.log('inside createIfNotExists')
            Chat.find(meEmail, contactEmail).then(chats=>{
                
                if (chats.empty){
                    
                    Chat.create(meEmail, contactEmail).then(chat=>{
                        console.log('contacts:',meEmail, contactEmail)
                        s(chat)

                    })

                }else{

                    chats.forEach(chat => {
                        s(chat)
                    });
                }
            }).catch(err=>{ f(err) })
        })
    }
}