# Projeto WhatsApp Clone

[![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br)

Projeto desenvolvido como exemplo do Curso Completo de JavaScript na Udemy.com.

### Projeto
![WhatsApp Clone](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/whatsapp.jpg?alt=media&token=5fc78e3b-4871-424f-abfa-b765f2515d0c)

### Recursos Usados

Lista de recursos usados em aula para este projeto

| Recurso | Link |
| ------ | ------ |
| Webpack | https://webpack.js.org/ |
| Firebase Authentication | https://firebase.google.com/docs/auth/?authuser=0 |
| Cloud Firestore | https://firebase.google.com/docs/firestore/?authuser=0 |
| Cloud Functions | https://firebase.google.com/docs/functions/?hl=pt-br |
| Cloud Storage | https://firebase.google.com/docs/storage/?authuser=0 |
| PDF.js | https://mozilla.github.io/pdf.js/ |
| MediaDevices.getUserMedia() | https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia |


criação da função no cloud functions:

comandos=>
    instação do cloud functions:
        npm install -g firebase-tools // -g pra ser global
        firebase login //pra autenticar a linha de comando, abre web login
        firebase init functions // cria arquivos no nosso projeto, aqui escolhe o projeto
            a função é criada no arquivo index.js
        firebase deploy --only functions // pra criar a função
        
