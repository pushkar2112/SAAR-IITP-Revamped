<nav class="navbar">
  <div class="navbar-inner">
    <div class="container-fluid">

      <!-- show logo only when the screen width decreases - TODO-->
      <div style = "display: none; height: 70px" id = "nav-logo" class="navbar-brand" href="#">
        <img src="src/img/logo1.png"  alt="white logo" width="100" height="70">
      </div>
      
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="50" onclick="this.classList.toggle('active')">
            <path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
            <path class="line middle" d="m 30,50 h 40" />
            <path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
          </svg>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <div class="tab"><a href="#" class="hoverable"> Home</a></div>
          </li>
          <li>
            <div class="tab"><a href="#" class="hoverable"> About Us</a></div>
          </li>
          <li>
            <div class="tab"><a href="#" class="hoverable"> Gallery</a></div>
          </li>
          <li>
            <div class="tab"><a href="#" class="hoverable"> Timeline</a></div>
          </li>
          <li>
            <div class="tab"><a href="#" class="hoverable"> Contact</a></div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</nav>