function calculate() {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    const operasi = document.getElementById("operasi").value;
    if (isNaN(bil1)) bil1 = 0.0;
    if (isNaN(bil2)) bil2 = 0.0;
        if(operasi === "penjumlahan"){
            hasil = bil1 + bil2;
            pesan = `hasil penjumlahan antara ${bil1} dan ${bil2} adalah ${hasil}`;   
        }else if(operasi === "pengurangan"){
            hasil = bil1 - bil2;
            pesan = `hasil pengurangan antara ${bil1} dan ${bil2} adalah ${hasil}`;   
        }else if(operasi === "perkalian"){
            hasil = bil1 * bil2;
            pesan = `hasil perkalian antara ${bil1} dan ${bil2} adalah ${hasil}`;   
        }else if(operasi === "pembagian"){
            hasil = bil1 / bil2;
            pesan = `hasil pembagian antara ${bil1} dan ${bil2} adalah ${hasil}`;   
        }else{
            pesan = `operasi tidak valid!`;
        }
    alert(pesan);
}