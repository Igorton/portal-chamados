const excluir = document.getElementById('excluir')

if (excluir) {
    excluir.addEventListener("submit", async (e) => {
        e.preventDefault();

        async function excluir() {
            const Dadosexcluir = new FormData(concluir);
            const dados = await fetch('excluir.html', {
                method: "POST",
                body: Dadosexcluir
            });
        }
        Swal.fire({
            title: "Você deseja excluir o comentário?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                excluir();
                Swal.fire("Comentário excluido", "", "success").then((result) => {
                    if (result.isConfirmed) {
                        document.location.reload();
                    }
                });
            }
        });
    })
}