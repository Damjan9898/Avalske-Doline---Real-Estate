function validateForm() {
    var e = 0,
        t = document.getElementById("formFirstName").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć ]+$/.test(t) ? (document.getElementById("formFirstName").style.border = "") : ((document.getElementById("formFirstName").style.border = "1px solid red"), (e += 1));
    var r = document.getElementById("formLastName").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć ]+$/.test(r) ? (document.getElementById("formLastName").style.border = "") : ((document.getElementById("formLastName").style.border = "1px solid red"), (e += 1));
    var m = document.getElementById("formMessage").value;
    /^.+$/.test(m) ? (document.getElementById("formMessage").style.border = "") : ((document.getElementById("formMessage").style.border = "1px solid red"), (e += 1));
    var d = document.getElementById("formMail").value;
    /^[a-z0-9_\.-]{1,25}@[a-z0-9_\.-]{1,20}\.[a-z]{2,4}$/.test(d) ? (document.getElementById("formMail").style.border = "") : ((document.getElementById("formMail").style.border = "1px solid red"), (e += 1));
    var o = document.getElementById("formPhone").value;
    if ((/^[+\/0-9-]+$/.test(o) ? (document.getElementById("formPhone").style.border = "") : ((document.getElementById("formPhone").style.border = "1px solid red"), (e += 1)), 0 != e)) return !1;
}








function validateForm() {
    var e = 0,
        t = document.getElementById("Ime").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć ]+$/.test(t) ? (document.getElementById("Ime").style.border = "") : ((document.getElementById("Ime").style.border = "2px solid red"), (e += 1));
    var d = document.getElementById("Prezime").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć\- ]+$/.test(d) ? (document.getElementById("Prezime").style.border = "") : ((document.getElementById("Prezime").style.border = "2px solid red"), (e += 1));
    var l = document.getElementById("Grad").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć\-\. ]+$/.test(l) ? (document.getElementById("Grad").style.border = "") : ((document.getElementById("Grad").style.border = "2px solid red"), (e += 1));
    var r = document.getElementById("Opstina").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć\-\.0-9 ]+$/.test(r) ? (document.getElementById("Opstina").style.border = "") : ((document.getElementById("Opstina").style.border = "2px solid red"), (e += 1));
    var n = document.getElementById("Adresa").value;
    /^[A-Za-zАаБбВвГДдЂђЕеЖжЗзИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЋћУуФфХхЦцЧчЏџШшČĆŠĐŽšđžčć\-\.0-9\/ ]+$/.test(n) ? (document.getElementById("Adresa").style.border = "") : ((document.getElementById("Adresa").style.border = "2px solid red"), (e += 1));
    var m = document.getElementById("Mail").value;
    /^[a-z0-9_\.-]{1,25}@[a-z0-9_\.-]{1,20}\.[a-z]{2,4}$/.test(m) ? (document.getElementById("Mail").style.border = "") : ((document.getElementById("Mail").style.border = "2px solid red"), (e += 1));
    var o = document.getElementById("Telefon").value;
    if ((/^[+\/0-9\-]+$/.test(o) ? (document.getElementById("Telefon").style.border = "") : ((document.getElementById("Telefon").style.border = "2px solid red"), (e += 1)), 0 != e)) return !1;
}