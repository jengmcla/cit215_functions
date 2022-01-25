var catchphraseEle = document.body.querySelector(".main");
var damageEle = document.body.querySelector(".number");
var damage = 0;

function makeEle (catchphrase, val) {
    var ele = document.createElement("div");
    ele.innerHTML = catchphrase;
    document.body.querySelector(".main").appendChild(ele);
    increase(val);
}

function increase (val) {
    damage = damage + val;
    damageEle.innerHTML = "Damage Thanos has taken: " + damage;
}

document.body.querySelector(".spiderMan").addEventListener("click", function () {
    makeEle("Twip!", 2);
});

document.body.querySelector(".doctorStrange").addEventListener("click", function () {
    makeEle("Dormammu, I've come to bargain", 1);
});

document.body.querySelector(".ironMan").addEventListener("click", function () {
    makeEle("I am Iron Man", 3000);
});

document.body.querySelector(".milesMorales").addEventListener("click", function () {
    makeEle("I see this spark in you", 3);
});

document.body.querySelector(".reset").addEventListener("click", function () {
    catchphraseEle.innerHTML = "";
    damageEle.innerHTML = "";
});



