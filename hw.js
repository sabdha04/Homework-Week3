function kondisi(suhu){
    if(suhu >= -100 && suhu <= 0){
        return "Beku";
    }else if(suhu >= 1 && suhu <= 100){
        return "Cair";
    }else if(suhu >= 101 && suhu <= 500){
        return "Uap";
    }else{
        return "Tidak terdefinisi";
    }
}

function spbu(jenis,cc){
    if(jenis === "plat kuning" || jenis === "motor"){
        return "BBM subsidi";
    }else if(cc < 1500){
        return "Pertamax";
    }else{
        return "Pertamax turbo";
    }
}
//mengantikan nilai variabel dengan nilai yang ingin di uji dalam inputan
const suhu = Number(prompt("Masukkan suhu : "));
const jenis = (prompt("Masukkan jenis kendaraan : "));
const cc = Number(prompt("Masukkan cc kendaraan : "));

const x = kondisi(suhu);
const y = spbu(jenis,cc);

//hasil output di console
console.log("Jenis kendaraan : ",jenis);
console.log("Status bahan bakar : ",x);
console.log("jenis bahan bakar : ",y);

//-----------hasil output seperti di inputan------------
//alert(`jenis kendaraan adalah ${jenis}, status bahan bakar adalah ${x}, jenis bahan bakar adalah ${y} `)