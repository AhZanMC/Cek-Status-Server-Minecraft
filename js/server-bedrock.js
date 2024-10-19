let ipInput = document.getElementById("ip-input");
let portInput = document.getElementById("port-input");

// Panggil Fungsi getServerStatus() saat tombol "Enter" ditekan
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('button[type="button"]');
    
    // Menjalankan fungsi saat tombol di klik
    submitButton.addEventListener("click", getServerStatus);

    // Menjalankan fungsi saat tekan "Enter" pada input IP
    ipInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            getServerStatus();
        }
    });

    // Menjalankan fungsi saat tekan "Enter" pada input Port
    portInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            getServerStatus();
        }
    });
});

// Function getServerStatus()
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
            <img src="https://api.mcsrvstat.us/icon/${ip}:${port}" alt="server_icon" height="64" width="64">
            <p class="card-text text-dark">
                ${data.motd.html} <button class="fa-regular fa-clipboard border border-0 copy-motd" data-motd="${data.motd.raw}"></button><br>
                Server : ${data.motd.clean}<br>
                IP : ${data.hostname}<br>
                Port : ${data.port}<br>
                Status : ONLINE<br>
                Players : ${data.players.online} / ${data.players.max}<br>
                Server Software : ${data.software}<br>
                Version : ${data.version}<br>
            </p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
                <a href="minecraft:?addExternalServer=${data.motd.clean}|${ip}:${port}" class="btn btn-primary">Join Server</a>
            </div>`;

            // Fitur Copy MOTD
            const copyButton = document.querySelector(".copy-motd");
            copyButton.addEventListener("click", function () {
                const motdText = this.getAttribute("data-motd");
                copyToClipboard(motdText);
            });
    } else {
        // Jika Server Offline
        document.getElementById("server-status").innerHTML = `
            <p class="card-text text-dark">
                Status : OFFLINE<br>
                Server Software : ${data.software}<br>
                Version : ${data.version}<br>
            </p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>`;
    }

    // Buka Modal atau Popup
    var bukaModal = new bootstrap.Modal(document.getElementById('ModalHasil'));
    bukaModal.show();
}

// Fungsi untuk menyalin teks ke clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("Copied the MOTD: " + text);
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}

// Panggil Fungsi getServerStatus()
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener("click", getServerStatus);
});

function closeModal() {
    // Tutup modal atau Popup
    var tutupModal = new bootstrap.Modal(document.getElementById('ModalHasil'));
    tutupModal.hide();

    setInterval(closeModal, 1000);

    // Refresh halaman
    window.location.reload();
}

// Checkbox Default Port
let check = document.getElementById("default-port");
let getPort = document.getElementById("port-input");
check.addEventListener("change", function () {
    if (check.checked) {
        getPort.value = "19132";
        getPort.readOnly = true;
    } else {
        getPort.value = "";
        getPort.readOnly = false;
    }
});