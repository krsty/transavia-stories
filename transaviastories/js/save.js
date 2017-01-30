 function chngimg() {
        var img = document.getElementById('imgplus').src;
        if (img.indexOf('Plus.gif')!=-1) {
            document.getElementById('imgplus').src  = 'img/account.png';
        }
         else {
           document.getElementById('imgplus').src = 'img/verhalen.png';
       }

    }