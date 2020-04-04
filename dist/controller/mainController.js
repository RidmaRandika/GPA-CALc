$(document).ready(function () {

    $("div#Btn").hide();//call function
    $("div#div-bcs").hide();
    $("div#div-zbc").hide();
    $("div#div-pbc").hide();
    $("div#div-zpc").hide();
    $("div#div-pbz").hide();
    $("div#div-mpc").hide();    
    $("div#div-mamp").hide();
    $("div#div-mamc").hide();
    $("div#div-dmcs").hide();
    $("div#div-mcsp").hide();
    $("div#div-mcsc").hide();
    $("div#div-mimp").hide();
    $("div#div-mimc").hide();
    $("div#BtnCalc").hide();

    $("#combination").change(function () {

        if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="BCS"){

            $("div#div-bcs").show();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#Btn").hide();
            $("div#BtnCalc").show();
        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="ZBC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").show();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MPC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").show();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();
            
        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MAMP"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").show();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MAMC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").show();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="DMCS"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").show();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MCSP"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").show();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MCSC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").show();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MIMP"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").show();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();


        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MIMC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();    
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").show();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="PBC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").show();
            $("div#div-zpc").hide();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="ZPC"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").show();
            $("div#div-pbz").hide();
            $("div#div-mpc").hide();
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();

        }else if ((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="ZBP"){

            $("div#div-bcs").hide();
            $("div#div-zbc").hide();
            $("div#div-pbc").hide();
            $("div#div-zpc").hide();
            $("div#div-pbz").show();
            $("div#div-mpc").hide();
            $("div#div-mamp").hide();
            $("div#div-mamc").hide();
            $("div#div-dmcs").hide();
            $("div#div-mcsp").hide();
            $("div#div-mcsc").hide();
            $("div#div-mimp").hide();
            $("div#div-mimc").hide();
            $("div#BtnCalc").show();
            $("div#Btn").hide();



        }else {
            $("div#div-combi").show();

        }
        });

    $("#Btncal").click(function () {

        $("div#Btn").show();
    });
});

//  function calcGPA() {
//
//     var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11, t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0,t9=0,t10=0,t11=0,totc=0;
//
//     if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="BCS"){
//
//          r1 = Number(document.getElementById("check1-bcs").options[document.getElementById("check1-bcs").selectedIndex].value);
//          r2 = Number(document.getElementById("check2-bcs").options[document.getElementById("check2-bcs").selectedIndex].value);
//          r3 = Number(document.getElementById("check3-bcs").options[document.getElementById("check3-bcs").selectedIndex].value);
//          r4 = Number(document.getElementById("check4-bcs").options[document.getElementById("check4-bcs").selectedIndex].value);
//          r5 = Number(document.getElementById("check5-bcs").options[document.getElementById("check5-bcs").selectedIndex].value);
//          r6 = Number(document.getElementById("check6-bcs").options[document.getElementById("check6-bcs").selectedIndex].value);
//          r7 = Number(document.getElementById("check7-bcs").options[document.getElementById("check7-bcs").selectedIndex].value);
//          r8 = Number(document.getElementById("check8-bcs").options[document.getElementById("check8-bcs").selectedIndex].value);
//
//
//         var is = 1.25;var de = 1.25;var amt = 2.5;var la = 3;var sad = 2;var iswd = 1.5;var pt = 3;var cs = 2;
//         totc = 16.5;
//         t1 = 0;t2 = 0;t3 = 0;t4 = 0;t5 = 0;t6 = 0;t7 = 0;t8 = 0;
//
//         if (!isNaN(r1)) {
//             t1 = is * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = de * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = amt * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = la * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = sad * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = iswd * r6;
//         } else {
//             t6 = 0;
//         }
//
//         if (!isNaN(r7)) {
//
//             t7 = pt * r7;
//         } else {
//
//             t7 = 0;
//         }
//         if (!isNaN(r8)) {
//
//             t8 = cs * r8;
//         } else {
//             t8 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
//
//     }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="ZBC"){
//
//
//         r1 = Number(document.getElementById("check1-zbc").options[document.getElementById("check1-zbc").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-zbc").options[document.getElementById("check2-zbc").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-zbc").options[document.getElementById("check3-zbc").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-zbc").options[document.getElementById("check4-zbc").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-zbc").options[document.getElementById("check5-zbc").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-zbc").options[document.getElementById("check6-zbc").selectedIndex].value);
//         r7 = Number(document.getElementById("check7-zbc").options[document.getElementById("check7-zbc").selectedIndex].value);
//         r8 = Number(document.getElementById("check8-zbc").options[document.getElementById("check8-zbc").selectedIndex].value);
//         r9 = Number(document.getElementById("check9-zbc").options[document.getElementById("check9-zbc").selectedIndex].value);
//
//         var pdue = 2 ; var sab =1; var pa=1;var bp =1 ;var gc =2 ; var oc =2 ;var zoo = 2 ; var id = 2 ;var zp = 1 ;
//         totc = 14 ;
//
//         if (!isNaN(r1)) {
//             t1 = pdue * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = sab * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = pa * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = bp * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = gc * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = oc * r6;
//         } else {
//             t6 = 0;
//         }
//
//         if (!isNaN(r7)) {
//
//             t7 = zoo * r7;
//         } else {
//
//             t7 = 0;
//         }
//         if (!isNaN(r8)) {
//
//
//             t8 = id * r8;
//         } else {
//             t8 = 0;
//         }
//         if (!isNaN(r9)) {
//
//             t9 = zp * r9;
//         } else {
//
//             t9 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
//     }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="ZPC"){
//
//
//         r1 = Number(document.getElementById("check1-zpc").options[document.getElementById("check1-zpc").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-zpc").options[document.getElementById("check2-zpc").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-zpc").options[document.getElementById("check3-zpc").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-zpc").options[document.getElementById("check4-zpc").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-zpc").options[document.getElementById("check5-zpc").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-zpc").options[document.getElementById("check6-zpc").selectedIndex].value);
//
//
//         var gc =2; var oc =2 ;var gp = 4 ; var zoo= 2 ;  var id = 2 ; var zp = 1 ;
//
//         totc =  13 ;
//
//         if (!isNaN(r1)) {
//             t1 = gc * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = oc * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = gp * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = zoo * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = id * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = zp * r6;
//         } else {
//             t6 = 0;
//         }
//         if (!isNaN(r7)) {
//
//             t7 = gp * r7;
//         } else {
//
//             t7 = 0;
//         }
//
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 +t7) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
//
//     }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="PBC"){
//
//
//         r1 = Number(document.getElementById("check1-pbc").options[document.getElementById("check1-pbc").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-pbc").options[document.getElementById("check2-pbc").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-pbc").options[document.getElementById("check3-pbc").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-pbc").options[document.getElementById("check4-pbc").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-pbc").options[document.getElementById("check5-pbc").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-pbc").options[document.getElementById("check6-pbc").selectedIndex].value);
//         r7 = Number(document.getElementById("check7-pbc").options[document.getElementById("check7-pbc").selectedIndex].value);
//
//
//         var pdue =2; var sab =1 ;var pa = 1 ; var btny= 1 ;  var gc = 2 ; var oc =2 ;var gp =4;
//
//         totc =  13 ;
//
//         if (!isNaN(r1)) {
//             t1 = pdue * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = sab * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = pa * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = btny * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = gc * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = oc * r6;
//         } else {
//             t6 = 0;
//         }
//         if (!isNaN(r7)) {
//
//             t7 = gp * r7;
//         } else {
//             t7 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 ) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
//
//     }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="ZBP"){
//
//
//         r1 = Number(document.getElementById("check1-pbz").options[document.getElementById("check1-pbz").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-pbz").options[document.getElementById("check2-pbz").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-pbz").options[document.getElementById("check3-pbz").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-pbz").options[document.getElementById("check4-pbz").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-pbz").options[document.getElementById("check5-pbz").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-pbz").options[document.getElementById("check6-pbz").selectedIndex].value);
//         r7 = Number(document.getElementById("check7-pbz").options[document.getElementById("check7-pbz").selectedIndex].value);
//         r8 = Number(document.getElementById("check8-pbz").options[document.getElementById("check8-pbz").selectedIndex].value);
//
//
//         var pdue =2; var sab =1 ;var pa = 1 ; var bp= 1 ;  var gp = 4 ; var cz =2 ;var id =2;var gzp=1;
//
//         totc =  13 ;
//
//         if (!isNaN(r1)) {
//             t1 = pdue * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = sab * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = pa * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = bp * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = gp * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = cz * r6;
//         } else {
//             t6 = 0;
//         }
//         if (!isNaN(r7)) {
//
//             t7 = id * r7;
//         } else {
//             t7 = 0;
//         }
//         if (!isNaN(r7)) {
//
//             t7 = gzp * r7;
//         } else {
//             t7 = 0;
//         }
//         if (!isNaN(r8)) {
//
//             t8 = gzp * r8;
//         } else {
//             t8 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 ) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
//
//     }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MPC"){
//
//
//         r1 = Number(document.getElementById("check1-mpc").options[document.getElementById("check1-mpc").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-mpc").options[document.getElementById("check2-mpc").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-mpc").options[document.getElementById("check3-mpc").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-mpc").options[document.getElementById("check4-mpc").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-mpc").options[document.getElementById("check5-mpc").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-mpc").options[document.getElementById("check6-mpc").selectedIndex].value);
//         //r7 = Number(document.getElementById("check7-mpc").options[document.getElementById("check7-mpc").selectedIndex].value);
//
//         //maths
//         var va= 2.5 ;
//         var dif = 1.25;
//         var is = 1.25;
//         //phycics
//         var gp = 4;
//         //var epp = 2;
//         //chemi
//         var gcbcac = 2;
//         var foc = 2;
//         totc = 13 ;
//
//         if (!isNaN(r1)) {
//             t1 = va * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = dif * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = is * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = gp * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = gcbcac * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = foc * r6;
//         } else {
//             t6 = 0;
//         }
//
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 +t10) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
//
//     }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MAMP"){
//
//
//         r1 = Number(document.getElementById("check1-mamp").options[document.getElementById("check1-mamp").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-mamp").options[document.getElementById("check2-mamp").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-mamp").options[document.getElementById("check3-mamp").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-mamp").options[document.getElementById("check4-mamp").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-mamp").options[document.getElementById("check5-mamp").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-mamp").options[document.getElementById("check6-mamp").selectedIndex].value);
//
//         //maths
//         var va= 2.5 ;
//         var dif = 1.25;
//         var is = 1.25;
//         //amat
//         var clam = 2.5;
//         var amt =2.5;
//         //phycics
//         var gp = 4;
//         totc = 14 ;
//
//         if (!isNaN(r1)) {
//             t1 = va * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = dif * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = is * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = clam * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = amt * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = gp * r6;
//         } else {
//             t6 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 ) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
// }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MAMC"){
//
//
//         r1 = Number(document.getElementById("check1-mamc").options[document.getElementById("check1-mamc").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-mamc").options[document.getElementById("check2-mamc").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-mamc").options[document.getElementById("check3-mamc").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-mamc").options[document.getElementById("check4-mamc").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-mamc").options[document.getElementById("check5-mamc").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-mamc").options[document.getElementById("check6-mamc").selectedIndex].value);
//         r7 = Number(document.getElementById("check7-mamc").options[document.getElementById("check7-mamc").selectedIndex].value);
//         //maths
//         var va= 2.5 ;
//         var dif = 1.25;
//         var is = 1.25;
//         //amat
//         var clam = 2.5;
//         var amt =2.5;
//         //chemi
//         var gcbcac = 2;
//         var foc = 2;
//         totc = 14 ;
//
//         if (!isNaN(r1)) {
//             t1 = va * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = dif * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = is * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = clam * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = amt * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = gcbcac * r6;
//         } else {
//             t6 = 0;
//         }
//
//         if (!isNaN(r7)) {
//
//             t7 = foc * r7;
//         } else {
//             t7 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 ) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
// }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="DMCS"){
//
//
//         r1 = Number(document.getElementById("check1-dmcs").options[document.getElementById("check1-dmcs").selectedIndex].value);
//         r2 = Number(document.getElementById("check2-dmcs").options[document.getElementById("check2-dmcs").selectedIndex].value);
//         r3 = Number(document.getElementById("check3-dmcs").options[document.getElementById("check3-dmcs").selectedIndex].value);
//         r4 = Number(document.getElementById("check4-dmcs").options[document.getElementById("check4-dmcs").selectedIndex].value);
//         r5 = Number(document.getElementById("check5-dmcs").options[document.getElementById("check5-dmcs").selectedIndex].value);
//         r6 = Number(document.getElementById("check6-dmcs").options[document.getElementById("check6-dmcs").selectedIndex].value);
//         r7 = Number(document.getElementById("check7-dmcs").options[document.getElementById("check7-dmcs").selectedIndex].value);
//         r8 = Number(document.getElementById("check8-dmcs").options[document.getElementById("check8-dmcs").selectedIndex].value);
//         //maths
//         var va= 2.5 ;
//         var dif = 1.25;
//         var is = 1.25;
//         //amat
//         var clam = 2.5;
//         var amt =2.5;
//         //cs
//         var bcit = 1;
//         var pt = 2.5;
//         var iswd = 1.5;
//         totc = 15 ;
//
//         if (!isNaN(r1)) {
//             t1 = va * r1;
//         } else {
//
//             t1 = 0;
//         }
//         if (!isNaN(r2)) {
//
//             t2 = dif * r2;
//         } else {
//             t2 = 0;
//         }
//
//         if (!isNaN(r3)) {
//
//             t3 = is * r3;
//         } else {
//
//             t3 = 0;
//         }
//         if (!isNaN(r4)) {
//
//             t4 = clam * r4;
//         } else {
//             t4 = 0;
//         }
//
//         if (!isNaN(r5)) {
//
//             t5 = amt * r5;
//         } else {
//
//             t5 = 0;
//         }
//         if (!isNaN(r6)) {
//
//             t6 = bcit * r6;
//         } else {
//             t6 = 0;
//         }
//
//         if (!isNaN(r7)) {
//
//             t7 = pt * r7;
//         } else {
//             t7 = 0;
//         }
//
//         if (!isNaN(r7)) {
//
//             t8 = iswd * r8;
//         } else {
//             t8 = 0;
//         }
//
//         var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8) / totc;
//         document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
// }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MIMP"){
//
//
//     r1 = Number(document.getElementById("check1-mimp").options[document.getElementById("check1-mimp").selectedIndex].value);
//     r2 = Number(document.getElementById("check2-mimp").options[document.getElementById("check2-mimp").selectedIndex].value);
//     r3 = Number(document.getElementById("check3-mimp").options[document.getElementById("check3-mimp").selectedIndex].value);
//     r4 = Number(document.getElementById("check4-mimp").options[document.getElementById("check4-mimp").selectedIndex].value);
//     r5 = Number(document.getElementById("check5-mimp").options[document.getElementById("check5-mimp").selectedIndex].value);
//
//     //maths
//     var va= 2.5 ;
//     var dif = 1.25;
//     var is = 1.25;
//     //im
//     var cm = 2.5;
//     //phycics
//     var gp = 4;
//     totc = 11.5;
//
//     if (!isNaN(r1)) {
//         t1 = va * r1;
//     } else {
//
//         t1 = 0;
//     }
//
//
//     if (!isNaN(r2)) {
//
//         t2 = dif * r2;
//     } else {
//
//         t2 = 0;
//     }
//     if (!isNaN(r3)) {
//
//         t3 = is * r3;
//     } else {
//         t3 = 0;
//     }
//
//     if (!isNaN(r4)) {
//
//         t4 = cm * r4;
//     } else {
//
//         t4 = 0;
//     }
//     if (!isNaN(r5)) {
//
//         t5 = gp * r5;
//     } else {
//         t5 = 0;
//     }
//
//     var gpa = (t1 + t2 + t3 + t4 + t5 ) / totc;
//     document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
// }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MIMC"){
//
//
//     r1 = Number(document.getElementById("check1-mimc").options[document.getElementById("check1-mimc").selectedIndex].value);
//     r2 = Number(document.getElementById("check2-mimc").options[document.getElementById("check2-mimc").selectedIndex].value);
//     r3 = Number(document.getElementById("check3-mimc").options[document.getElementById("check3-mimc").selectedIndex].value);
//     r4 = Number(document.getElementById("check4-mimc").options[document.getElementById("check4-mimc").selectedIndex].value);
//     r5 = Number(document.getElementById("check5-mimc").options[document.getElementById("check5-mimc").selectedIndex].value);
//     r6 = Number(document.getElementById("check6-mimc").options[document.getElementById("check6-mimc").selectedIndex].value);
//
//     //maths
//     var va= 2.5 ;
//     var dif = 1.25;
//     var is = 1.25;
//     //im
//     var cm = 2.5;
//     //chemi
//     var gcbcac = 2;
//     var foc = 2;
//     totc = 11.5;
//
//     if (!isNaN(r1)) {
//         t1 = va * r1;
//     } else {
//
//         t1 = 0;
//     }
//
//
//     if (!isNaN(r2)) {
//
//         t2 = dif * r2;
//     } else {
//
//         t2 = 0;
//     }
//     if (!isNaN(r3)) {
//
//         t3 = is * r3;
//     } else {
//         t3 = 0;
//     }
//
//     if (!isNaN(r4)) {
//
//         t4 = cm * r4;
//     } else {
//
//         t4 = 0;
//     }
//     if (!isNaN(r5)) {
//
//         t5 = gcbcac * r5;
//     } else {
//         t5 = 0;
//     }
//
//     if (!isNaN(r6)) {
//
//         t6 = foc * r6;
//     } else {
//         t6 = 0;
//     }
//
//     var gpa = (t1 + t2 + t3 + t4 + t5 + t6) / totc;
//     document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
// }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MCSP"){
//
//
//     r1 = Number(document.getElementById("check1-mcsp").options[document.getElementById("check1-mcsp").selectedIndex].value);
//     r2 = Number(document.getElementById("check2-mcsp").options[document.getElementById("check2-mcsp").selectedIndex].value);
//     r3 = Number(document.getElementById("check3-mcsp").options[document.getElementById("check3-mcsp").selectedIndex].value);
//     r4 = Number(document.getElementById("check4-mcsp").options[document.getElementById("check4-mcsp").selectedIndex].value);
//     r5 = Number(document.getElementById("check5-mcsp").options[document.getElementById("check5-mcsp").selectedIndex].value);
//     r6 = Number(document.getElementById("check6-mcsp").options[document.getElementById("check6-mcsp").selectedIndex].value);
//     r7 = Number(document.getElementById("check7-mcsp").options[document.getElementById("check7-mcsp").selectedIndex].value);
//
//     //maths
//     var va= 2.5 ;
//     var dif = 1.25;
//     var is = 1.25;
//     //cs
//     var bcit = 1;
//     var pt = 2.5;
//     var iswd = 1.5;
//     //phycics
//     var gp = 4;
//     totc = 14;
//
//     if (!isNaN(r1)) {
//         t1 = va * r1;
//     } else {
//
//         t1 = 0;
//     }
//
//
//     if (!isNaN(r2)) {
//
//         t2 = dif * r2;
//     } else {
//
//         t2 = 0;
//     }
//     if (!isNaN(r3)) {
//
//         t3 = is * r3;
//     } else {
//         t3 = 0;
//     }
//
//     if (!isNaN(r4)) {
//
//         t4 = bcit * r4;
//     } else {
//
//         t4 = 0;
//     }
//
//     if (!isNaN(r5)) {
//
//         t5 = pt * r5;
//     } else {
//
//         t5 = 0;
//     }
//
//     if (!isNaN(r6)) {
//
//         t6 = iswd * r6;
//     } else {
//
//         t6 = 0;
//     }
//     if (!isNaN(r7)) {
//
//         t7 = gp * r7;
//     } else {
//         t7 = 0;
//     }
//
//     var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7) / totc;
//     document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
//
// }else if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="MCSC"){
//
//
//     r1 = Number(document.getElementById("check1-mcsc").options[document.getElementById("check1-mcsc").selectedIndex].value);
//     r2 = Number(document.getElementById("check2-mcsc").options[document.getElementById("check2-mcsc").selectedIndex].value);
//     r3 = Number(document.getElementById("check3-mcsc").options[document.getElementById("check3-mcsc").selectedIndex].value);
//     r4 = Number(document.getElementById("check4-mcsc").options[document.getElementById("check4-mcsc").selectedIndex].value);
//     r5 = Number(document.getElementById("check5-mcsc").options[document.getElementById("check5-mcsc").selectedIndex].value);
//     r6 = Number(document.getElementById("check6-mcsc").options[document.getElementById("check6-mcsc").selectedIndex].value);
//     r7 = Number(document.getElementById("check7-mcsc").options[document.getElementById("check7-mcsc").selectedIndex].value);
//     r8 = Number(document.getElementById("check8-mcsc").options[document.getElementById("check8-mcsc").selectedIndex].value);
//
//     //maths
//     var va= 2.5 ;
//     var dif = 1.25;
//     var is = 1.25;
//     //cs
//     var bcit = 1;
//     var pt = 2.5;
//     var iswd = 1.5;
//     //chemi
//     var gcbcac = 2;
//     var foc = 2;
//
//     totc = 14;
//
//     if (!isNaN(r1)) {
//         t1 = va * r1;
//     } else {
//
//         t1 = 0;
//     }
//
//
//     if (!isNaN(r2)) {
//
//         t2 = dif * r2;
//     } else {
//
//         t2 = 0;
//     }
//     if (!isNaN(r3)) {
//
//         t3 = is * r3;
//     } else {
//         t3 = 0;
//     }
//
//     if (!isNaN(r4)) {
//
//         t4 = bcit * r4;
//     } else {
//
//         t4 = 0;
//     }
//
//     if (!isNaN(r5)) {
//
//         t5 = pt * r5;
//     } else {
//
//         t5 = 0;
//     }
//
//     if (!isNaN(r6)) {
//
//         t6 = iswd * r6;
//     } else {
//
//         t6 = 0;
//     }
//     if (!isNaN(r7)) {
//
//         t7 = gcbcac * r7;
//     } else {
//         t7 = 0;
//     }
//
//     if (!isNaN(r8)) {
//
//         t8 = foc * r8;
//     } else {
//         t8 = 0;
//     }
//
//     var gpa = (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8) / totc;
//     document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
// }
// }

