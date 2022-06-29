async function menuju(){
    await swals.fire('Kirim pesan ke WhatsApp aku, ya!');
    window.location = "https://api.whatsapp.com/send?phone=6282287737273&text=" + pesanwhatsapp;
  }

  async function jawab(){
    var { value: jawaban } = await swals.fire({
        title: 'Ga Sengaja &#128073;&#128072;', 
        input: 'text', allowOutsideClick: false, showCancelButton: false,
    });

    if(jawaban && jawaban.length < 21){
      window.jawaban = jawaban;
      pesanwhatsapp = jawaban;
      finalakhir();
    } 

    else {
      await swals.fire('Ups!', 'Jawaban tidak boleh kosong atau lebih dari 20 karakter, ya!');
      jawab();
    }
  }

  async function pertama(){
    audio = new Audio('https://feeldreams.github.io/gasengaja.mp3');
    
    gambar1 = "https://feeldreams.github.io/bunga.gif";
    gambar2 = "https://feeldreams.github.io/weee.gif";
    gambar3 = "https://feeldreams.github.io/pusn.gif";
    gambar4 = "https://feeldreams.github.io/pusn.gif";
    gambar5 = "https://feeldreams.github.io/emawh.gif";
    
    kata1 = "Aku Minta Maaf ya,";
    kata2 = "Kalau Aku Suka Sama Kamu";
    kata3 = "Ga Sengaja >.<";
    kata4 = "Sumpah :v";
    kata5 = "Love You 🥰";
    
    emot = "👉🏻👈🏻";

    loadfoto();
    
    await swalst.fire('Tunggu');
    await swals.fire('Haii!', 'Sekarang liat ini ya :)');
    setTimeout(showDiv,300);
  } 
  
  pertama();