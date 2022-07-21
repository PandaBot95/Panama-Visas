document.getElementById("myBtn").addEventListener("click", function(e) {
            e.preventDefault();

            var fname = document.querySelector('input[name="fname"]').value;
            var country = document.querySelector('input[name="country"]').value;

            var message = "<html><br>| Fullname: ${fname} <br> | Country: ${country} <br></html>";

            var token = "5462120018:AAHeYcwl4rrce0y7rR097u3U7kqUb-C73EU";
            var chat_id = -1015359440;
            var url = 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}text=${message}&parse_mode=html';

            https: //api.telegram.org/bot5462120018:AAHeYcwl4rrce0y7rR097u3U7kqUb-C73EU/sendMessage"-d"chat_id=-1015359440text=asdad
                var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.send();

            alert("Message sent");
        });