let isReadyCheck = () => {
    let allChecked = true;
    document.querySelectorAll(".check-button").forEach(item => {
        allChecked = allChecked && item.checked;
    })
    document.querySelectorAll(".range").forEach(item => {
        allChecked = allChecked && item.value === "100"
    })
    document.getElementById("launch-button").disabled = !allChecked;
}

window.onload = () => {
    document.getElementById("accessPasswordButton").addEventListener("click", () => {
        if (document.getElementById("accessPassword").value === "TrustNo1") {
            document.querySelectorAll(".check-button").forEach(item => {
                item.disabled = false;
            })
            document.querySelectorAll(".range").forEach(item => {
                item.disabled = false;
            })
            document.getElementById("accessPassword").disabled = true;
            document.getElementById("accessPasswordButton").disabled = true;
        }
    })

    document.getElementById("launch-button").addEventListener("click", () => {
        document.getElementById("launch-button").disabled = true;
        let rocket = document.getElementById("rocket");
        let left = 25;
        let bottom = 25;
        let deg = 25;
        let rocketMove = setInterval(() => {
            rocket.style["bottom"] = bottom + "%";
            rocket.style["left"] = left + "%"
            rocket.style.transform = `rotate(${deg}deg)`
            bottom += 3;
            left += 2.5;
            deg += 1.3;
        }, 50)

        setTimeout(()=>{
            clearInterval(rocketMove)
        }, 2000)

    })



}