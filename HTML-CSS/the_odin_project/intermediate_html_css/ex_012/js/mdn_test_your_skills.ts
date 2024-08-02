const inviteSlider = document.querySelector("#invite-slider") as HTMLInputElement;
const inviteOutput = document.querySelector(".invite-output") as HTMLInputElement;

inviteOutput.textContent = inviteSlider.value;

inviteSlider.addEventListener("input", changeOutputValue);

function changeOutputValue() {
    inviteOutput.textContent = inviteSlider.value;
}
