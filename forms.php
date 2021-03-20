<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>

    <title>Form Preview</title>

    <!-- preconnecting to google fonts to increase loading speed-->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <!-- all style imports -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> <!-- bootstrap styles -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> <!-- fontawesome -->

    <!-- all script imports -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script> <!-- jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script><!-- popper.js -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script><!-- bootstrap js -->

    <!-- all third party imports have to be done before the custom imports -->

    <!-- all custom style imports -->
    <?php include './partials/head.php' ?>
    <link rel="stylesheet" href="./src/css/form.css">


</head>

<body style="background-color: #90e4f8; display: flex; justify-content: center;">
    <div style="border-radius: 3px; margin: 50px; padding: 25px; width: 500px; background-color: white;">
        <form>
            <div style="margin-bottom: 25px;" class="col-md-12 col-sm-10">
                <div class="form-group row">
                    <input type="email" class="form-control" id="inputEmail1" placeholder="<not s>">
                    <label for="inputEmail1" class='form-label-name'>Email</label>
                </div>
            </div>
            <div class="col-md-12 col-sm-10">
                <div class="form-group row">
                    <input type="password" class="form-control" id="inputPassword1" placeholder="<anything>">
                    <label for="inputPassword1" class='form-label-name'>Password</label>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <label class="checkbox">
                        <input type="checkbox">
                        <span class="default"></span>
                    </label>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-ripple">Sign in</button>

                </div>
            </div>
        </form>
    </div>


</body>

</html>