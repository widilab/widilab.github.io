const items = [
  {
    name: "Beras 5kg",
    price: "Rp 74.000",
    image: "images/beras-5kg.jpg",
  },
  {
    name: "Beras 1kg",
    price: "Rp 16.000",
    image: "images/beras-1kg.jpg",
  },
  {
    name: "Ketan 1kg",
    price: "Rp 25.000",
    image: "images/ketan-1kg.jpg",
  },
  {
    name: "injin 1kg",
    price: "Rp 30.000",
    image: "images/injin-1kg.jpg",
  },
  {
    name: "tepung terigu lencana merah ",
    price: "Rp 11.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },
  {
    name: "Tepung ketan",
    price: "Rp 74.000",
    image: "images/beras-5kg.jpg",
  },
  {
    name: "Beras 1kg",
    price: "Rp 16.000",
    image: "images/beras-1kg.jpg",
  },
  {
    name: "Ketan 1kg",
    price: "Rp 25.000",
    image: "images/ketan-1kg.jpg",
  },
  {
    name: "injin 1kg",
    price: "Rp 30.000",
    image: "images/injin-1kg.jpg",
  },
  {
    name: "tepung terigu lencana merah ",
    price: "Rp 11.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },
  {
    name: "Tepung kanji ",
    price: "Rp 9.000",
    image: "images/tepung-kanji.jpg",
  },
  {
    name: "Minyak kita",
    price: "Rp 19.000",
    image: "images/minyak-kita.jpg",
  },
  {
    name: "Lengis tandusan ",
    price: "Rp 25.000",
    image: "images/lengis-tandusan.jpg",
  },
  {
    name: "Tabie setengah on ",
    price: "Rp 5.000",
    image: "images/Tabie.jpg",
  },
  {
    name: "Tomat  ",
    price: "Rp 1.000",
    image: "images/tomat.jpg",
  },
  {
    name: "Tabie lombok ",
    price: "Rp 1.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },

  {
    name: "uyah yodium ",
    price: "Rp 2.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },
  {
    name: "Uyah Bali",
    price: "Rp 5.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },
  {
    name: "Gula bali 1kg ",
    price: "Rp 19.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },
  {
    name: "Gula pasir 1kg",
    price: "Rp 15.000",
    image: "images/tepung-terigu-lencana-merah.jpg",
  },
  // Tambahkan item lain di sini
];

const searchInput = document.getElementById("search");
const tableBody = document.querySelector("#itemTable tbody");

function displayItems(items) {
  tableBody.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><img src="${item.image}" alt="${item.name}"></td>
    `;
    tableBody.appendChild(row);
  });
}

searchInput.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  );
  displayItems(filteredItems);
});

// Initial display of items
displayItems(items);
