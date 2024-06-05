let olhoaberto = document.getElementById('olhoAberto');
let inputSenha = document.getElementById('senhaInput');


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