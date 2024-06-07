let olhoaberto = document.getElementById('olhoAb');
let inputSenha = document.getElementById('abc');


function MostraSenha(){

    if (inputSenha.type === "password"){
        inputSenha.type = 'text';
        olhoaberto.src = './IMAGENS/Eye.png'
    }
    else{
        inputSenha.type = 'password'
        olhoaberto.src = './IMAGENS/EyeCut.png'
    }
}