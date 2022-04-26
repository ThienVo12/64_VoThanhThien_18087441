
function checkten() {
            var ht = document.getElementById("txtten").value;
            var loi1 = document.getElementById("er1");
            pt1 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
            if(ht.trim() == "") {
                loi1.innerHTML = "Bắt buộc nhập";
                return false;
            }
            if(!pt1.test(ht)) {
                loi1.innerHTML = "dùng chữ hoa đầu từ không dùng số";
                return false;
            }
            else {
                loi1.innerHTML = "";
                return true;
            }
        }

        function checkao() {
            var ao = document.getElementById("txtao").value;
            var loi2 = document.getElementById("er2");
            pt2 = /^[0-9]{1,2}$/;
            if(ao.trim() == "") {
                loi2.innerHTML = "Bắt buộc nhập";
                return false;
            }
            if(!pt2.test(ao)) {
                loi2.innerHTML = "dùng chữ số (số nguyên từ 1 đến 100) ";
                return false;
            }
            else {
                loi2.innerHTML = "";
                return true;
            }
        }

        function checkclb() {
            var clb = document.getElementById("txtclb").value;
            var loi3 = document.getElementById("er3");
            pt3 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)(\s[0-9]*)*$/;
            if(clb.trim() == "") {
                loi3.innerHTML = "Bắt buộc nhập";
                return false;
            }
            if(!pt3.test(clb)) {
                loi3.innerHTML = "Dùng chữ hoa đầu từ và số";
                return false;
            }
            else {
                loi3.innerHTML = "";
                return true;
            }
        }
        function checkngay() {
            var ngay = document.getElementById("txttt").value;
            var loi4 = document.getElementById("er4");

            if(ngay.trim() == "") {
                loi4.innerHTML = "Bắt buộc nhập";
                return false;
            }
            else {
                loi4.innerHTML = "";
                return true;
            }
        }
        function checksdt() {
            var sdt = document.getElementById("txtsdt").value;
            var loi5 = document.getElementById("er5");
            pt5 = /^0[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
            if(sdt.trim() == "") {
                loi5.innerHTML = "Bắt buộc nhập";
                return false;
            }
            if(!pt5.test(sdt)) {
                loi5.innerHTML = "Điện thoại theo mẫu: 0xxx-xxx-xxx ";
                return false;
            }
            else {
                loi5.innerHTML = "";
                return true;
            }  
        }
        var i = 1;
        $(document).ready(function() {
            $('#btnsave').click(function() {
                if(!checkten() || !checkao() || !checkclb() || !checkngay() || !checksdt()) {
                    $('#notifi').html("Mời bạn nhập đúng và đầy đủ thông tin");
                    return false;
                }
                else {
                var ht = $('#txtten').val();
                var ao = $('#txtao').val();
                var clb = $('#txtclb').val();
                var ngay = $('#txttt').val();
                var sdt = $('#txtsdt').val();
                var anh = $('#txtanh').val();

                var them = "<tr><td>" +(i++)+ "</td><td>" + ht + "</td><td>" + ao + "</td><td>" + clb + "</td><td>" + ngay + "</td><td>" + sdt + "</td><td>" + anh + "</td></tr>";
                $('table tbody').append(them);
                $('#mymodal').modal('hide');
                return true;
            }
            })
            
        });