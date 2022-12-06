const cobaclose = document.getElementsByClassName("operlay");

for (let i = 0; i < cobaclose.length; i++) {
  cobaclose[i].addEventListener("click", function () {
    let url = window.location.href.substr(0, window.location.href.indexOf("#"));
    window.location = url();
  });
}
