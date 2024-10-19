let ipInput = document.getElementById("ip-input");

// Function getServerStatus()
async function getServerStatus() {
    const ip = ipInput.value;

    // Panggil API Minecraft
    const response = await fetch(`https://api.mcsrvstat.us/3/${ip}`);
    const data = await response.json();

    if (data.online) {
        // Jika Server Online
        document.getElementById("server-status").innerHTML = `
            <img src="https://api.mcsrvstat.us/icon/${ip}" alt="server_icon" height="64" width="64">
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
            </div>`;

        // Fitur Copy MOTD
        const copyButton = document.querySelector(".copy-motd");
        copyButton.addEventListener("click", function() {
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

// Panggil Fungsi getServerStatus saat tombol submit diklik
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener("click", getServerStatus);

    // Tambahkan event listener untuk menangkap tombol "Enter" pada input field
    ipInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Mencegah aksi default (misalnya, submit form)
            getServerStatus(); // Panggil fungsi saat enter ditekan
        }
    });
});

function closeModal() {
    // Tutup modal atau Popup
    var tutupModal = new bootstrap.Modal(document.getElementById('ModalHasil'));
    tutupModal.hide();

    setInterval(closeModal, 1000);

    // Refresh halaman
    window.location.reload();
}
