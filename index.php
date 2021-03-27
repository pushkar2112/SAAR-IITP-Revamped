<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>

    <title>SAAR - IITP</title>

    <!-- preconnecting to google fonts to increase loading speed-->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    
    <!-- all script imports -->
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
    </script> <!-- jquery -->

    <!-- all third-party imports have to be done before the custom imports -->

    <!-- all custom style imports -->
    <?php include getcwd() . '/partials/head.php' ?>

    <link rel="stylesheet" href="src/css/home.min.css">

    <script src="src/js/paroller.min.js"></script>
</head>
<body>
    <!-- <div class="wrapper__view"> -->
        <section class="home">

            <div class="bg__parallax" data-src="./src/assets/images/bgA.jpg"></div>

            <img src="./src/assets/images/logo1.png" class="logo">
            <div class="main">
                <h1>S A A R</h1>
                <h5>Students' Association for Alumni Relations</h5>
                <?php include getcwd() . '/partials/navbar.php' ?>
            </div>
            <img src="./src/assets/images/next.svg" class="scroll-indic">

        </section>

        <section class="about">

            <div class="bg__parallax" data-src="./src/assets/images/rectA.svg"></div>

            <img src="./src/assets/images/cubes.svg" class="cubes top-left">
            <div class="main">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi incidunt deserunt fugit aliquid dignissimos iure commodi tenetur quis aperiam placeat doloremque labore vitae porro voluptate itaque, sint cum numquam dicta ratione adipisci consequatur. Molestiae, aut ex mollitia nisi, dolor a exercitationem laudantium deserunt atque optio debitis voluptate dolorem quod! Ducimus quisquam, delectus rem saepe et culpa quos animi esse dolor incidunt recusandae magni aut minima porro accusantium nesciunt vel velit autem amet, ratione distinctio? Sit optio natus id praesentium?</p>
            </div>
            <img src="./src/assets/images/cubes.svg" class="cubes bottom-right">

        </section>

        <section class="gallery">

            <div class="bg__parallax" data-src="./src/assets/images/gconvo-dark.jpg"></div>

            <div class="main">
                <h1>G a l l e r y</h1>
                <a href="#" class="more">
                    <span class="text">See More</span>
                    <img src="./src/assets/images/arrow-white-small.svg" class="arrow">
                </a>
            </div>

        </section>

        <section class="timeline">

            <div class="bg__parallax" data-src="./src/assets/images/rectB.svg"></div>

            <img src="./src/assets/images/cubes2.svg" class="cubes top-right">
            <div class="main">
                <h1>Timeline</h1>
                <div class="event__container">
                    <div class="event">
                        <div class="marker"></div>
                        <p class="title">Event A</p>
                        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci maiores odio quam rerum sed incidunt voluptas id soluta qui voluptates harum nesciunt, ipsam aliquid</p>
                    </div>
                    <div class="event">
                        <div class="marker"></div>
                        <p class="title">Event A</p>
                        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci maiores odio quam rerum sed incidunt voluptas id soluta qui voluptates harum nesciunt, ipsam aliquid</p>
                    </div>
                    <div class="event">
                        <div class="marker"></div>
                        <p class="title">Event A</p>
                        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci maiores odio quam rerum sed incidunt voluptas id soluta qui voluptates harum nesciunt, ipsam aliquid</p>
                    </div>
                </div>
                <a href="#" class="more">
                    <span class="text">See More</span>
                    <img src="./src/assets/images/arrow-white-small.svg" class="arrow">
                </a>
            </div>
            <img src="./src/assets/images/cubes.svg" class="cubes bottom-left">
            <img src="./src/assets/images/cubes.svg" class="cubes bottom-right">

        </section>

        <section class="anusmriti"></section>
    <!-- </div> -->

    <?php include getcwd() . '/partials/footer.php'?>
    <script src="./src/js/home.js"></script>
</body>

</html>