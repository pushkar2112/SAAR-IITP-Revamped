<!DOCTYPE html>
<html>

<head>
    <title>Gallery</title>

    <!-- preconnecting to google fonts to increase loading speed-->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <!-- all third-party script imports -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">
    </script> <!-- jquery -->

    <!-- all custom imports -->
    <?php include getcwd() . '/partials/head.php' ?>

    <link rel="stylesheet" href="src/css/gallery.min.css">

</head>

<body>

    <img src="./src/assets/images/cubes.svg" class="cubes top-right">
    <img src="./src/assets/images/cubes.svg" class="cubes bottom-left">

    <div class="header">
        <a class="back-button" href="./index.php">
            <img src="./src/assets/images/back-head-white.svg">
        </a>

        <img src="./src/assets/images/logo1.png" class="logo">
    </div>

    <div class="viewer">

        <img class="album-image prev">
        <img class="album-image active">
        <img class="album-image next">

    </div>

    <img src="./src/assets/images/back-head-white.svg" class="arrow-icon hide" href="./index.php">

    <div class="scroller hide">
        <div class="album active">
            <img src="./src/assets/images/gallery-images/dc.jpg" class="image-card album-cover">
            <img src="./src/assets/images/gallery-images/gconvo.jpg" class="image-card">
            <img src="./src/assets/images/gallery-images/bconvo.jpg" class="image-card">
            <img src="./src/assets/images/gallery-images/sconvo.jpg" class="image-card">
            <h3 class="album-title">Graduation Ceremony</h3>
        </div>
        <div class="album">
            <img src="./src/assets/images/gallery-images/cs.jpg" class="image-card album-cover">
            <img src="./src/assets/images/gallery-images/ee.jpg" class="image-card">
            <img src="./src/assets/images/gallery-images/mech.jpg" class="image-card">
            <img src="./src/assets/images/gallery-images/btech14-18ch.jpg" class="image-card">
            <img src="./src/assets/images/gallery-images/btech14-18ce.jpg" class="image-card">
            <h3 class="album-title">Batch Photos '18</h3>
        </div>
    </div>

    <script src="src/js/gallery.js"></script>

</body>

</html>