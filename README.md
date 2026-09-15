## CEK STATUS SERVER MINECRAFT

![Creator](https://img.shields.io/badge/Author-AhZanMC-yellow)
[![Generic badge](https://img.shields.io/badge/Release-version2-purple.svg)](https://shields.io/)

[Home](README.md) | [Changelog](Changelog.md) | [Cara Menggunakan](#cara-menggunakan) | [Creator](#creator)

Repository ini berisi tentang website yang dapat menampilkan status server Minecraft itu aktif atau tidak dengan menggunakan API [Minecraft Server Status](https://mcsrvstat.us/)

Tujuan dibuatnya website ini adalah untuk mencari dan mengecek server apakah aktif atau tidak beserta detail informasi server seperti IP, Port, versi Minecraft yang didukung, software yang digunakan, sampai berapa jumlah player.

## FITUR-FITUR
- Menampilkan informasi server seperti IP, Port, Nama Server, Versi, dan MOTD
- Mendukung pengecekan server Java maupun Bedrock
- Pengguna dapat memasukkan IP dan Port server secara manual
- Menampilkan status EULA Blocked (server yang melanggar EULA Mojang)
- Menampilkan daftar nama player yang sedang online (jika server mengizinkan)
- Menampilkan Gamemode server (khusus Bedrock)
- Menampilkan daftar Plugins server (khusus Java, jika query diaktifkan)
- Menampilkan Response Time saat pengecekan status server
- Jika server offline, informasi tetap ditampilkan pada sebuah popup
- Ada indikator loading saat proses pengecekan status server berlangsung
- Tombol direct ke Minecraft langsung (khusus server Bedrock), jadi user bisa join server tanpa perlu memasukkan IP dan Port secara manual
- Tampilan yang simple dan mudah digunakan, dibangun menggunakan Bootstrap

## Cara Menggunakan

### Cara Menggunakan Aplikasi ini di website (secara online)

1. Buka website [cek-server.ahzanmc.my.id](https://cek-server.ahzanmc.my.id/)
2. Pilih edisi Minecraft
3. Masukkan IP dan Port (untuk Bedrock)
4. Tunggu hasilnya

### Cara Menggunakan dan Menjalankan Website (Localhost)

1. Clone repository ini (bisa download manual atau pakai Git Bash/terminal)
2. Buka folder yang berisi repository ini
3. Jalankan menggunakan extension Live Server pada VS Code
4. Buka localhost pada browser
5. Pilih edisi Minecraft
6. Masukkan IP dan Port (untuk Bedrock)
7. Tunggu hasilnya

Selengkapnya cek [disini](https://api.mcsrvstat.us/)

## Tech Stack
Website ini dibangun dengan menggunakan :
- [Bootstrap](https://getbootstrap.com/) - Framework front-end populer yang menyediakan template desain berbasis HTML, CSS, dan JavaScript untuk membangun antarmuka pengguna yang responsif dan modern.
- [Minecraft Server Status API](https://api.mcsrvstat.us/) - API dari mcsrvstat.us yang menyediakan informasi status server Minecraft secara real-time, digunakan sebagai sumber data utama website ini.

## Creator
- Creator : [AhZanMC](https://bio-link.ahzanmc.my.id/)
- Youtube : [AhZanMC](https://youtube.com/c/AhZanMC)
- Instagram : [@ahzanmc](https://www.instagram.com/ahzanmc/)
- Tiktok : [@ahzanmc](http://tiktok.com/@ahzanmc)
- Discord : [Teman Fauzan](https://discord.gg/P8N2tbTW3k)
- Saluran WA : [Klik disini](https://whatsapp.com/channel/0029VaWN5AR05MUmTwwxfj3K)

## Thanks
Makasih buat kalian yang sudah menggunakan repository ini untuk keperluan website server kalian, silakan dimodifikasi sesuai kebutuhan kalian :)

Berbagi ilmu itu penting, karena masih banyak yang ingin membangun website tapi bingung harus mulai dari mana. Semoga proyek sederhana ini bisa membantu, meski masih jauh dari sempurna.

## PESAN DARI CREATOR

**!!! Warning !!!**

Repository ini hanya untuk sekadar belajar atau digunakan pada website kamu sendiri. **Dilarang keras** mengakuinya sebagai karya sendiri, apalagi sampai memperjualbelikannya.