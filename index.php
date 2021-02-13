<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <?php include './partials/head.php' ?>
    <title>SAAR</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" >
    
    <link rel="stylesheet" href="./src/css/navbar.css">
    <link rel="stylesheet" href="./src/css/footer.css">

    <!-- temporary preview of the style -->
    <style>
        .slider {
            padding-top: 0px;
            min-width: 100%;
            min-height: 100vh;
            width: 100%;
            height: 100vh;
            text-align: center;
            background: rgb(241, 255, 248);
            background: linear-gradient(0deg, rgba(241, 255, 248, 1) 0%, rgba(129, 209, 249, 1) 100%);
        }
    </style>


<body>
    <div class="slider">
        <?php include './partials/navbar.php' ?>
        <!-- preview text -->
        <h1>SAAR-IITP</h1>
        
    </div>

    <?php include './partials/footer.php' ?>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>