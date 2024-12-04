const script_do_google = 'https://script.google.com/macros/s/AKfycbxbQvKdknRFBOVcrIa5c4k2Ul220w9LPysAB3eE3XVu_ONA4hi1DCgJz0kr-4ONHhAL0A/exec';
const dados_do_formulario = document.forms

dados_do_formulario.addEventListener('subit', function (e) {
    e.preventDefault();

    fetch(script_do_google, {method: 'POST', body: new FormData(dados_do_formulario) })
    .then(response => {
        //Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
        alert('Dados enviados com sucesso!', response)
        dados_do_formulario.reset();
    })
    .catch(error =>
        //se houver erro no envio, a mensagem abaixo será exibida
    console.error('Erro no envio dos dados!'));
});