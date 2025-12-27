document.addEventListener("DOMContentLoaded", function () {

  const inputNama = document.getElementById("nama");
  const inputPesan = document.getElementById("pesan");
  const errorText = document.getElementById("error");
  const hasilText = document.getElementById("hasil");
  const listPesan = document.getElementById("listPesan");
  const btnKenal = document.getElementById("btnKenal");
  const btnKirim = document.getElementById("btnKirim");

  function mengenalSaya() {
    alert("Halo, saya Hafiz");
  }

  function kirimPesan() {
    const nama = inputNama.value;
    const pesan = inputPesan.value;

    errorText.innerText = "";

    if (nama === "" || pesan === "") {
      errorText.innerText = "Nama dan pesan wajib diisi";
      return;
    }

    const divPesan = document.createElement("div");
    divPesan.className = "pesan-card";
    divPesan.innerHTML =
      "<strong>" + nama + "</strong><br>" +
      pesan +
      "<br><button class='hapus-btn' onclick='hapusPesan(this)'>Hapus</button>";

    listPesan.prepend(divPesan);

    inputNama.value = "";
    inputPesan.value = "";

    showToast("Pesan berhasil dikirim")
  }

  function hapusPesan(tombol) {
    tombol.parentElement.remove();
  }

let toastTimer;

function showToast(pesan) {
  const toast = document.getElementById("toast");

  clearTimeout(toastTimer);

  toast.innerText = pesan;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

  btnKenal.addEventListener("click", mengenalSaya);
  btnKirim.addEventListener("click", kirimPesan);

});