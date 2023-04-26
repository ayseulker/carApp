let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];


//! 1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.

let findCar = [];




cars.forEach(function (car) {
    if (car.includes("o")) {
        findCar.push(car)
    }
    //console.log(car);
});
 console.log("İçinde o Harfi Geçen Arabalar:" + findCar)
 console.log("İçinde o harfi Gecen Arabaların Sayısı:" + findCar.length)

//! 2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.

findCar = [];


cars.forEach(function (car) {
    toplamO = 0;
    for (let i = 0; i <= car.length; i++) {
        if (car.charAt(i) == "o") {
            toplamO += 1

        }
    }
    if (toplamO == 2) {
        findCar.push(car)
    }
});

console.log("İçinde iki defa o Harfi Geçen Arabalar:" + findCar)

//! 3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.

findCar = [];


cars.forEach(function (car) {
    if (car.length < 5) {
        findCar.push(car)
    }
    //console.log(car);
});

console.log("Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.:" + findCar)



//! 4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.

findCar = [];



cars.forEach(function (car) {
    if (car.charAt(0).includes("f")) {
        let a = car.replace((car.charAt(car.length - 1)), "x")
        findCar.push(a)
    }
});


console.log("Ilk harfi f olan arabalarin son harfini x olarak degistirin." +findCar)


//! 5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari, isimlerinin önüne "my favorite " gelecek sekilde degistirin ve html icerisinde listeleyin.

findCar = [];



cars.forEach(function (car) {
    let car1 = car.trim()
    if (car1.length >= 3 && car1.length <= 6) {
        if (car.includes("a")) {
            let a = "My favorite"
            let car2 = a.concat(" ", car)
            findCar.push(car2)
        }
    }
});

 let list = document.getElementById("list")

 function myFavorite(findCar){
    const  ul= document.createElement("ul")
    list.appendChild(ul)
    ul.innerHTML="My Favorite Cars";
    ul.style.fontWeight="bold";
    ul.style.color="purple";
    ul.style.fontSize="16px"
    findCar.forEach(function (car){
      const li = document.createElement("li");
    li.innerHTML= car;
    li.style.marginLeft="30px"
    list.appendChild(li)    
})
}
    
myFavorite(findCar);




//! 6) Ismi icinde "o" ve "a" gecen arabalari bulunuz.


findCar = [];



cars.forEach(function (car) {
    if (car.includes("o") && car.includes("a")) {
        findCar.push(car)
    }
});

console.log("İsmi içinde o ve a geÇen arabaları bulunuz:" + findCar)

//! 7) Ismi icinde "o" veya "i" gecen arabalari bulunuz.


findCar = [];



cars.forEach(function (car) {
    if (car.includes("o") || car.includes("i")) {
        findCar.push(car)
    } 
});

console.log("İsmi içinde o veya i geçen arabaları bulunuz:" + findCar)