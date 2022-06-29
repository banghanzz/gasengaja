function showDiv() {
    setTimeout(setel,50);
    pergantian();
    setTimeout(kpemb,100);
    document.getElementById('Content').style = "opacity:1;margin-top:4vh;animation:kont 5s infinite;";
    document.querySelector("body").style.animation = "none 8s ease infinite";
  } 

  function kpemb() {
    bq.style = "opacity:1;visibility:visible;margin-top:5px";
  }

  function loadfoto(){
    fotosatu.style="display:inline-flex";
    fotosatu.src = gambar1;
    fotodua.src = gambar2;
    fototiga.src = gambar3;
    fotoempat.src = gambar4;
    fotolima.src = gambar5
  }

  function tombol(){
    Tombol.style="opacity:1;transform: scale(1);";
    ftom=1;
  } 
  
  ftom=0; 
  
  function fakhiran(){
    document.getElementById("akhiran").style = "display:inline-flex";
  }

  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); 
  const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,}); 
  const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 1200, timerProgressBar: true, didOpen: () => {Swal.showLoading();
  const b = Swal.getHtmlContainer().querySelector('b');
  timerInterval = setInterval(() => {Swal.getTimerLeft()}, 100)},willClose: () => {clearInterval(timerInterval)}}); 
  const style = document.createElement('style'); 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');var yyyy = today.getFullYear();
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
  
  function otomatis() {
    befanimkata();setTimeout(animkata,200);
  } 
  
  function befanimkata(){
    kalimat.style="transform:scale(.3);";
  } 
  
  function animkata() {
    kalimat.style="transform:scale(1);";
  }

  function otomatis2() {
    befanimkataa();setTimeout(animkataa,200);
  } 
  
  function befanimkataa(){
    kalimatc.style="transform:scale(.3);font-size:14px;margin-top:30px;";
  } 
  
  function animkataa() {
    kalimatc.style="transform:scale(1);font-size:14px;margin-top:30px;";
  }

  function finalakhir(){
    ftom=2;
    otomatis2();
    By.innerHTML = "Kirim Pesan";
    kalimatc.innerHTML = "Jawabanmu: " + pesanwhatsapp;
  } 
  
  function sjawab(){
    if(ftom==1){
      kalimatc.innerHTML = "";
      otomatis2();
      jawab();
    } 

    if(ftom==2){
      menuju();
    }
  }

  function setel(){
    audio.play();
  } 
  
  function setel2(){
    bgm.play();
  } 

  var aa=0,kata1;
  function ngetik() {
    if(aa<kata1.length){
      kalimat.innerHTML += kata1.charAt(aa);aa++;setTimeout(ngetik,40);
    }
  }

  var au=0,kata2;
  function ngetik2() {
    if(au<kata2.length){
      kalimat.innerHTML += kata2.charAt(au);au++;setTimeout(ngetik2,40);
    }
  }

  var ai=0,kata3;
  function ngetik3() {
    if(ai<kata3.length){
      kalimat.innerHTML += kata3.charAt(ai);ai++;setTimeout(ngetik3,40);
    }
  }

  var ae=0,kata4;
  function ngetik4() {
    if(ae<kata4.length){
      kalimat.innerHTML += kata4.charAt(ae);ae++;setTimeout(ngetik4,40);
    }
  }

  var ao=0,kata5;
  function ngetik5() {
    kalimat.style="font-size:20px";
    if(ao<kata5.length){
      kalimat.innerHTML += kata5.charAt(ao);ao++;setTimeout(ngetik5,60);
    }
  }

  function bawahlagi(){
    setTimeout(tombol,1000);
    kalimatc.style="margin-top:30px;";
    kalimatc.innerHTML = emot;
  }
  
  function pergantian(){
    setTimeout(gantikata,1100);
    setTimeout(gantikata,2500);
    setTimeout(gantikata,3850);
    setTimeout(gantikata,4700);
    setTimeout(gantikata,5800);
  }

  function tfkata(){
    fkata+=1;
  } 
  
  function bersihkan(){
    kalimat.innerHTML = "";
  }

  fkata=1;
  function gantikata(){
    if(fkata==1){
      kalimat.innerHTML = "";
      setTimeout(ngetik,50);
    }

    if(fkata==2){
      kalimat.innerHTML = "";
      setTimeout(ngetik2,50);
      fotosatu.style="display:none";
      fotodua.style="display:inline-flex;"
    }

    if(fkata==3){
      kalimat.innerHTML = "";
      setTimeout(ngetik3,50);
      fotodua.style="display:none";
      fototiga.style="display:inline-flex";
    }

    if(fkata==4){
      kalimat.innerHTML = "";
      setTimeout(ngetik4,50);
      fototiga.style="display:none";
      fotoempat.style="display:inline-flex";
    }

    if(fkata==5){
      wallpaper.style="transform: scale(1.8)";
      kalimat.innerHTML = "";
      setTimeout(ngetik5,50);
      setTimeout(bawahlagi,1700);
      fotoempat.style="display:none";
      fotolima.style="display:inline-flex";
    }

    setTimeout(tfkata, 300);
  }