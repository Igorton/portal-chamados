<?php
session_start();
include_once('../conexao/conexao.html');

    $estrela = $_POST['estrela'];
    $email = $_POST['email'];
    $comentario = $_POST['comentario'];
    $idcomentario = $_POST['id'];

    // $sqlAvaliacao = "INSERT INTO feedback (avaliacao, email, chamadoid, comentario) VALUES ('$estrela')";
    $sqlAvaliacao = "INSERT INTO feedback (avaliacao, email, comentario, chamadoid) VALUES ('$estrela', '$email', '$comentario', '$idcomentario')";
    $resultAva = mysqli_query($conexao, $sqlAvaliacao);

    header('location: chamados.html');

?>
