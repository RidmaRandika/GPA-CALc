<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>GPA Calc</title>
    <meta charset="UTF-8">
    <meta name="keywords" content="gpa,GPA,GPa,gPa,gPA,GPa,Cal,Calc,gpacalc,GPA-CAL,GPA-CALC">
    <meta name="description" content="Great Point Average Calculator Faculty of Science University of Ruhuna">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Ridma Randika | Supun Tharuka">
    <!--===============================================================================================-->
    <link rel="icon" type="image/png" href="dist/images/icons/icons8-gpa-calculator-100.png"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/vendor/animate/animate.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/vendor/select2/select2.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/vendor/daterangepicker/daterangepicker.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="dist/css/util.css">
    <link rel="stylesheet" type="text/css" href="dist/css/main.css">
    <link href="example" rel="stylesheet/scss" type="text/css">
    <!--===============================================================================================-->
    <script>
        function myFunction1() {
            var x = document.getElementById("selectGrade");
            x.style.display = "none";

        }
        function viewGrade(a) {
            var x = document.getElementById(a);
            var y = document.getElementById("selectGrade")
            x.innerHTML  = y.innerHTML;
        }
    </script>
</head>
<!--##############################################################################################-->
<div id="selectGrade">
    <select>
        <option selected value="-1">Choose the Grade</option>
        <option value="4">A+</option>
        <option value="4">A</option>
        <option value="3.7">A-</option>
        <option disabled> </option>
        <option value="3.3">B+</option>
        <option value="3">B</option>
        <option value="2.7">B-</option>
        <option disabled> </option>
        <option value="2.3">C+</option>
        <option value="2">C</option>
        <option value="1.7">C-</option>
        <option disabled> </option>
        <option value="1.3">D+</option>
        <option value="1">D</option>
        <option value="0">E-</option>
        <option disabled> </option>
        <option value="-1">Absent</option>
    </select>
</div>
<script>
    myFunction1();

</script>

<style>img[alt="www.000webhost.com"]{display: none;}</style>
<!--##############################################################################################-->

<body style="background-image: url('dist/images/photo-1572188239907-dc2c52fb9580.jpg');">

<form id="form-data" method="GET">

<div class="container-contact100 " >
    <div class="wrap-contact100">
			<span class="contact100-form-symbol">
				<img src="dist/images/icons/icons8-gpa-calculator-100.png" alt="SYMBOL-MAIL">
			</span>
        <span class="contact100-form-title" style="text-align: center">
					<h1>GPA Calculator</h1>
            </span>

        <div class="form-group col-md-6" id="div-combi">
            <label for="combination"><h6>Select the Combination</h6></label>
            <select id="combination" class="form-control" name="combination">
                <option selected>Choose the Combination</option>
                <option disabled></option>
                <option value="BCS">Bachelor of Computer Science</option>
                <option disabled></option>
                <option value="ZBC">ZOO / BOT / CHE</option>
                <option value="PBC">PHY / BOT / CHE</option>
                <option value="ZPC">ZOO / PHY / CHE</option>
                <option value="ZBP">ZOO / BOT / PHY</option>
                <option disabled></option>
                <option value="MPC">MAT / PHY / CHE</option>
                <option value="MAMP">MAT / AMAT / PHY</option>
                <option value="MAMC">MAT / AMAT/ CHE</option>
                <option value="DMCS">MAT / AMT / CS</option>
                <option value="MIMP">MAT / IM / PHY</option>
                <option value="MIMC">MAT / IM / CHE</option>
                <option value="MCSP">MAT / CS / PHY</option>
                <option value="MCSC">MAT / CS / CHE</option>

            </select>
        </div>



        <!--===============================================================================================-->

        <div id="div-bcs">
            <br><hr><br>
            <form class="contact100-form validate-form flex-sb flex-w">


                <div class="form-group col-md-6">
                    <label for="check1-bcs"><h6 id="h1-bcs">Inductory Statistics</h6></label>
                    <select id="check1-bcs" class="form-control">
                        <script>viewGrade("check1-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check2-bcs"><h6 id="h2-bcs">Differential Equation</h6></label>
                    <select id="check2-bcs" class="form-control">
                        <script>viewGrade("check2-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check3-bcs"><h6 id="h3-bcs">Mathemathical Foundation of CS</h6></label>
                    <select id="check3-bcs" class="form-control">
                        <script>viewGrade("check3-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check4-bcs"><h6 id="h4-bcs">Laboratory Assignment</h6></label>
                    <select id="check4-bcs" class="form-control">
                        <script>viewGrade("check4-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check5-bcs"><h6 id="h5-bcs">System Analysis and Design </h6></label>
                    <select id="check5-bcs" class="form-control">
                        <script>viewGrade("check5-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check6-bcs"><h6 id="h6-bcs">Internet Services and Web Development</h6></label>
                    <select id="check6-bcs" class="form-control">
                        <script>viewGrade("check6-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check7-bcs"><h6 id="h7-bcs">Programming Techniques</h6></label>
                    <select id="check7-bcs" class="form-control">
                        <script>viewGrade("check7-bcs");</script>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="check8-bcs"><h6 id="h8-bcs">Computer Systems</h6></label>
                    <select id="check8-bcs" class="form-control">
                        <script>viewGrade("check8-bcs");</script>
                    </select>
                </div>


            </form>
        </div>
        <div id="BtnCalc">

            <div class="button form-group col-md-3" id="button-5">
                <div id="translate"></div>
                <a id ="Btncal" href="#navi">Calculate !</a>
            </div>

        </div>


        <div>

            <div id="Btn" class="col-md-6" style="width:350px ; height: 100px ; background-color:#C70039">
                <a name="navi"> <h4 id="gpatag" style="color: white; font-family: Georgia  ; text-align: center ; padding: 30px"><b> </b> </h4></a>
            </div>
        </div>


    </div>

</div>
</form>
</body>

<!-- Site footer -->
<footer class="site-footer">
    <div class="container">
        <div class="row">

            <div class="col-xs-6 col-md-3">
                <h6>Abbreviations</h6><br>
                <ul class="footer-links">
                    <li>ZOO - ZOOLOGY</li>
                    <li>CHE - CHEMISTRY</li>
                    <li>BOT - BOTANY</li>
                    <li>PHY - PHYSICS</li>
                </ul>
            </div>
            <div class="col-xs-6 col-md-3">
                <h6></h6><br>
                <ul class="footer-links">
                    <li>MAT - MATHEMATICS</li>
                    <li>AMAT - APPLIED MATHEMATICS</li>
                    <li>IM - INDUSTRIAL MATHEMATICS</li>
                    <li>CS - COMPUTER SCIENCE</li>
                </ul>
            </div>
        </div>
        <hr>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                    <a href="#" style="font-size: 18px"><i><b></br>sIx7 Solutions</b></i></a>.
                </p>
            </div>
        </div>
    </div>
</footer>

<script src="dist/js/jquery-3.3.1.min.js"></script>
<script src="dist/controller/mainController.js"></script>
<script src="dist/controller/IndexController.js"></script>

</html>

