var xhr = new XMLHttpRequest();
xhr.open('GET', '/subscribers');
xhr.send(null);
xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            // console.log(xhr.responseText); // 'This is the returned text.'
            var subs = JSON.parse(xhr.responseText);
            var el = document.getElementById('winner');
            var ei = document.getElementById('id');
            var st = document.getElementById('start');
            var cc = document.getElementById('counterContainer');
            var co = document.getElementById('counter');
            console.log(subs[Math.random() * subs.length | 0]);

            var seconds = 30;

            st.onclick = function(){
                this.remove();

                var counter = setInterval(function(){
                    cc.style.display = "block"
                    co.innerHTML = seconds;
                    seconds--;
                    if(seconds === -1){
                        clearInterval(counter);
                        clearInterval(random);
                    }
                },1000);
            };

            var random = setInterval(function(){
                var winner = subs[Math.random() * subs.length | 0];
                el.innerHTML = winner["YouTube Display Name"];
                ei.innerHTML = winner["YouTube Channel Id"];
            },150);




        } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
    }
};