var inviteSlider = document.querySelector("#invite-slider");
var inviteOutput = document.querySelector(".invite-output");
inviteOutput.textContent = inviteSlider.value;
inviteSlider.addEventListener("input", changeOutputValue);
function changeOutputValue() {
    inviteOutput.textContent = inviteSlider.value;
}
