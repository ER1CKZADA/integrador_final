<?php
    require 'banco.php';

    $sql = "select * from produtos";

    $qry = $con->prepare($sql);

    $qry->execute();

    $registros = $qry->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($registros);
  
?>