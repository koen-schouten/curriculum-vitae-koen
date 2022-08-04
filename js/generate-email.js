function addMailToAdressToElement(){
    const emailName = "koen.schouten";
    const emailDomain = "google.com";
    const emailplusaddress = "public"

    let mailToElement =  document.getElementById("mailto");
    mailToElement.href = `mailto:${emailName}+${emailplusaddress}@${emailDomain}`
}

window.addEventListener('DOMContentLoaded', (event) => {
    addMailToAdressToElement();
});