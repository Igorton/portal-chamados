const concluir = document.getElementById('concluir')


if (concluir) {
  concluir.addEventListener("submit", async (e) => {
    e.preventDefault();

    async function submit_Chamado() {
      const Dadosconcluir = new FormData(concluir);
      const dados = await fetch('concluir.html', {
        method: "POST",
        body: Dadosconcluir
      });
      const resposta = await dados.json();
    }
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Deseja encerrar o chamado?',
      text: "Uma vez feito não é possível reabrir!",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Encerrar o chamado!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        submit_Chamado();
        Swal.fire(
          'Chamado encerrado!',
          '',
          'success',
        ).then((result) => {
          if (result.isConfirmed) {
            document.location.reload();
          }
        })
        Swal.fire({
          allowOutsideClick: false,
          template: '#my-template',
          preConfirm: () => {
            const estrela = Swal.getPopup().querySelector('input[id="vazio"]:checked')
            const comentario = Swal.getPopup().querySelector('#inputMessage').value
            if (estrela || !comentario) {
              Swal.showValidationMessage('Selecione uma avaliação para o chamado!')
            }
            return {
              estrela: estrela,
              comentario: comentario
            }
          }
        }).then((result) => {
          if (result.isConfirmed) {

            Swal.fire(
              'Chamado avaliado e encerrado!',
              '',
              'success',
              incluirPost()
            ).then((result) => {
              if (result.isConfirmed) {
                document.location.reload();
              } else {
                document.location.reload();
              }
            })
          }
        })
      }
    })

  })
}


function incluirPost() {
  event.preventDefault();
  var comentario = document.getElementById('inputMessage').value
  var estrela = document.getElementsByName('estrela')
  var id = document.getElementById('id').value
  var email = document.getElementById('email').value
  for (var i = 0; i < estrela.length; i++) {
    if (estrela[i].checked) {
      estrela = estrela[i].value;
    }
  }

  $.ajax({
    type: 'POST',
    url: 'rating.html',
    data: {
      'estrela': estrela,
      'comentario': comentario,
      'id': id,
      'email': email
    },
  });
}