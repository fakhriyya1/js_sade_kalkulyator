var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var netice = document.getElementById("netice");
const hesab = document.getElementsByClassName("hesab");
const hesabArray = [...hesab];
console.log(hesabArray);

hesabArray.forEach((item) => {
    item.addEventListener("click", function () {
        switch (item.id) {
            case 'toplama':
                netice.value = Number(num1.value) + Number(num2.value);
                console.log(netice.value);
                break;
        
            case 'cixma':
                netice.value = Number(num1.value) - Number(num2.value);
                console.log(netice.value);
                break;
        
            case 'vurma':
                netice.value = Number(num1.value) * Number(num2.value);
                console.log(netice.value);
                break;
        
            case 'bolme':
                netice.value = Number(num1.value) / Number(num2.value);
                console.log(netice.value);
                break;
        }
    })
    })

