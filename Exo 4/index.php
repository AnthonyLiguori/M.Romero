<?php

// Connexion à la base de données
$servername = "10.170.10.29";
$username = "root";
$password = "";
$dbname = "BDD_Romero";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifie si la connexion a été établie avec succès
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupère les valeurs des champs "username" et "password" du formulaire
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Échappe les caractères spéciaux pour éviter les injections SQL
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    // Requête SQL pour insérer les données dans la table "utilisateurs"
    $sql = "INSERT INTO user (mail, password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode("Les données ont été ajoutées avec succès !");
    } else {
        echo json_encode("Erreur: ") . $sql . "<br>" . $conn->error;
    }

    // Ferme la connexion à la base de données
    $conn->close();
}
?>