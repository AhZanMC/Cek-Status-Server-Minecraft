let ipInput = document.getElementById("ip-input");
let portInput = document.getElementById("port-input");

async function getServerStatus() {
    const ip = ipInput.value;
    const port = portInput.value;
    
    // Panggil API Minecraft
    const response = await fetch(`https://api.mcsrvstat.us/bedrock/3/${ip}:${port}`);
    // Uraikan respon JSON jadi objek javascript yang bisa kamu gunakan
    const data = await response.json();

    if (data.online) {
        // Jika Server Online
        document.getElementById("server-status").innerHTML = `
            <p class="card-text text-dark">
                Server : ${data.motd.clean}<br>
                IP : ${data.hostname}<br>
                Port : ${data.port}<br>
                Status : ONLINE<br>
                Players : ${data.players.online} / ${data.players.max}<br>
                Server Software : ${data.software}<br>
                Version : ${data.version}<br>
            </p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModalAndRefresh()">Close</button>
                <button href="minecraft:?addExternalServer=${data.motd.clean}|${ip}:${port}" class="btn btn-primary">Join Server</button>
            </div>`;
    } else {
        // Jika Server Offline
        document.getElementById("server-status").innerHTML = `
            <p class="card-text text-dark">
                Status : OFFLINE<br>
                Server Software : ${data.software}<br>
                Version : ${data.version}<br>
            </p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModalAndRefresh()">Close</button>
            </div>`;
    }

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

// Panggil Fungsi getServerStatus()
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener("click", getServerStatus);
});

function closeModalAndRefresh() {
    // Tutup modal
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.hide();

    setInterval(closeModalAndRefresh, 1000);

    // Refresh halaman
    window.location.reload();
}