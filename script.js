// ============================================
// DATA GALERI
// ============================================

const defaultPhotos = [
  "images/little_story.jpg",
  "images/sweetest_memory.jpg",
  "images/sweetest.jpg",
  "images/together.jpg",
  "images/special_day.jpg",
  "images/top.jpg",
  "images/us.jpg",
  "images/favotit.jpg"
];

const photoNames = [
  "Our Little Story",
  "Sweetest Memory",
  "Favorite Moment",
  "Together",
  "A Special Day",
  "primcess",
  "Us",
  "Forever Memory"
];


// ============================================
// GALERI
// ============================================

const gallery = document.getElementById("galleryGrid");

function renderGallery(photos = defaultPhotos) {
  gallery.innerHTML = "";

  photos.slice(0, 8).forEach((src, index) => {
    const item = document.createElement("div");

    item.className = "g-item reveal";

    item.innerHTML = `
      <img src="${src}" alt="Foto ${index + 1}">
      <span>${photoNames[index]}</span>
    `;

    item.addEventListener("click", () => {
      document.getElementById("modalImg").src = src;
      document.getElementById("modal").classList.add("open");
    });

    gallery.appendChild(item);
  });

  observeReveal();
}

renderGallery();


// ============================================
// MODAL FOTO
// ============================================

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});


// ============================================
// UPLOAD FOTO DARI HP
// ============================================




// ============================================
// ANIMASI REVEAL SAAT SCROLL
// ============================================

function observeReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
  });
}

observeReveal();


// ============================================
// NAVIGASI TITIK
// ============================================

const sections = [...document.querySelectorAll(".page")];
const dots = [...document.querySelectorAll(".dot")];

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = sections.indexOf(entry.target);

        dots.forEach(dot => {
          dot.classList.remove("active");
        });

        if (dots[index]) {
          dots[index].classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.45
  }
);

sections.forEach(section => {
  sectionObserver.observe(section);
});
