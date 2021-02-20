<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>

    <title>SAAR (IITP) - Home</title>

    <!-- preconnecting to google fonts to increase loading speed-->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <!-- all style imports -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> <!-- bootstrap styles -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" > <!-- fontawesome -->
    
    <!-- all script imports -->
    <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous">
    </script> <!-- jquery -->
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous">
    </script><!-- popper.js -->
    <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous">
    </script><!-- bootstrap js -->

    <!-- all third party imports have to be done before the custom imports -->

    <!-- all custom style imports -->
    <?php include './partials/head.php' ?>

    <link rel="stylesheet" href="./src/css/navbar.css">
    <link rel="stylesheet" href="./src/css/footer.css">
    <link rel="stylesheet" href="./src/css/home_base.css">
    <link rel="stylesheet" href="./src/css/form.css">


</head>
<body>

    <?php include './partials/navbar.php' ?>
    
    <section class="landing">
        <div class="image-wrapper">
            <div class="box"></div>
            <img src="./src/img/slider/test.jpg">
            <div class="box-b"></div>
        </div>

        <div class="logo">
            <img src="./src/img/logo2.png">
            <h5>IIT Patna</h5>
            <h1>Students' Association for<br>Alumni Relations </h1>
        </div>
        <div class="scroll">↓</div>

        </section>

    <section class="about">
        <h1>ABOUT</h1>
        <button class = "btn mybtn"> Read More </button>
    </section>

    <?php include './partials/footer.php'?>

</body>

</html>