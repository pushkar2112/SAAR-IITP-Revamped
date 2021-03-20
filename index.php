<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>

    <title>SAAR (IITP) - Home</title>

    <!-- preconnecting to google fonts to increase loading speed-->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    
    <!-- all script imports -->
    <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous">
    </script> <!-- jquery -->

    <!-- all third-party imports have to be done before the custom imports -->

    <!-- all custom style imports -->
    <?php include './partials/head.php' ?>

    <link rel="stylesheet" href="./src/css/navbar.css">
    <link rel="stylesheet" href="./src/css/home_base.css">
    <link rel="stylesheet" href="./src/css/footer.css">

</head>
<body>

    <?php include './partials/navbar.php' ?>

    <?php include './partials/footer.php'?>

    <script src="./src/js/carousel.js"></script>
</body>

</html>