<?php
setlocale(LC_ALL, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
date_default_timezone_set('America/Sao_Paulo');

include_once('../conexao/conexao.html');
if (isset($_POST['id'])) {
    $id = $_POST['id'];
  
    // $sqlInsert = mysqli_query($conexao, "UPDATE cadchama SET concluido = '1' WHERE id = $id");
      $retorna = ['status' => true, 'msg' => "$id"];
  }else{
      $retorna = ['status' => false, 'msg' => "Você não avaliou o chamado!"];
  }
  echo json_encode($retorna);
  ?>