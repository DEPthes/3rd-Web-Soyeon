function find_address() {
    new daum.Postcode({
        oncomplete: function(data) {

            var address = ''; 
            
            if (data.userSelectedType === 'R') {
                console.log(data)
                address = data.roadAddress;
            } else {
                address = data.jibunAddress;
            }

            document.getElementById('zonecode').value = data.zonecode;
            document.getElementById("input_address").value = address;

            document.getElementById("detail").focus();
        }
    }).open();
}


