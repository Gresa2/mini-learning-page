function kontrollo(opsioni) {
let mesazhi = document.getElementById("mesazhi");

if (opsioni === "JS") {
mesazhi.innerText = "Saktë!";
mesazhi.style.color = "green";
} else {
mesazhi.innerText = "Provo përsëri.";
mesazhi.style.color = "red";
}
}

