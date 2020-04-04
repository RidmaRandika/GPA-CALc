var credit=[];
var row_cnt=0;
var r=[];
var t=[];
var cc=0;
var gpa=0;
$('#combination').change(function () {
    var formData = $('#form-data').serialize();

    $.ajax({
        url: "api/endpoints/indexService.php",
        method: "GET",
        async: true,
        data: formData + "&operation=getAll",
        dataType: "json"
    }).done(function (resp) {
        for (var i = 0; i < resp.length; i++) {
            credit[i]=resp[i][2];
            document.getElementById("h"+[i+1]+"-bcs").innerHTML=resp[i][1];
        }

    }).fail(function (error) {
        alert("Failed");
    });
});

$('#Btncal').click(function () {

                $.ajax({
                    url: "api/endpoints/indexService.php",
                    method: "GET",
                    async: true,
                    data: "operation=count",
                    dataType: "json"
                }).done(function (resp) {

                    var i=0;
                    if((document.getElementById("combination").options[document.getElementById("combination").selectedIndex].value)=="BCS"){

                        for ( i=0;i<resp;i++) {
                            r[i]=Number(document.getElementById("check"+(i+1)+"-bcs").options[document.getElementById("check"+(i+1)+"-bcs").selectedIndex].value);
                        }
                        for ( i=0;i<resp;i++) {

                            if (r[i]!=-1) {
                                t[i] = credit[i] * r[i];
                            } else {

                                t[i] = 0;
                            }
                        }
                                        $.ajax({
                                            url: "api/endpoints/indexService.php",
                                            method: "GET",
                                            async: true,
                                            data: "operation=credit",
                                            dataType: "json"
                                        }).done(function (resp_1) {

                                            for (i=0;i<resp;i++) {
                                               gpa+=t[i];
                                            }
                                            gpa =gpa/resp_1;
                                            document.getElementById("gpatag").innerHTML = "GPA : " + gpa.toFixed(2);
                                        }).fail(function (error) {
                                            alert("Failed");
                                        });
                    }

                }).fail(function (error) {
                   return error;
                });


});
