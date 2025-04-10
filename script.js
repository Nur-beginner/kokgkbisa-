const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".lu");
const regis = document.getElementById("regis");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
  })
);

// regis.addEventListener("click", () => {});

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// Tentukan tanggal tujuan
const targetDate = new Date("April 15, 2025 00:00:00").getTime();

// Update countdown setiap detik
const interval = setInterval(() => {
  const now = new Date().getTime(); // Waktu saat ini
  const timeLeft = targetDate - now; // Selisih waktu

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Tampilkan hasilnya
  // document.getElementById("countdown").innerHTML = `
  //   ${days}hari ${hours}jam ${minutes}menit ${seconds}detik
  // `;
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  // Jika waktu habis
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Countdown selesai!";
  }
}, 1000);

const header = document.getElementById("kepala");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const svgElement = document.querySelector("svg");

// Buat Intersection Observer untuk mendeteksi scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Tambahkan kelas 'active' ketika elemen terlihat di viewport
        svgElement.classList.add("rasyid");
      } 
    });
  },
  {
    threshold: 0.5, // Elemen harus setidaknya 50% terlihat untuk trigger
  }
);

// Mulai mengamati elemen
observer.observe(svgElement);

//dibawah ini adalah timeline
document.addEventListener("DOMContentLoaded", () => {
  const timelineData = [
    { stage: "Pendaftaran Dibuka", date: "10 Maret 2025", completed: true },
    { stage: "Pendaftaran Ditutup", date: "17 April 2025", completed: false },
    { stage: "Babak Penyisihan", date: "19 April 2025", completed: false },
    { stage: "Babak Final", date: "23 April 2025", completed: false },
    {
      stage: "Pengumuman Pemenang, Awarding, Secret Show",
      date: "24 April 2025",
      completed: false,
    },
  ];

  const timelineEl = document.getElementById("timeline");
  const progressEl = document.getElementById("progress");

  let completedStages = timelineData.filter((item) => item.completed).length;
  let progressPercentage = (completedStages / timelineData.length) * 100;
  progressEl.style.width = progressPercentage + "%";

  timelineData.forEach((item) => {
    const li = document.createElement("li");
    li.className = item.completed ? "completed" : "pending";
    li.innerHTML = `<span>${item.completed ? "✔" : "○"} ${item.stage} - ${
      item.date
    }</span>`;
    timelineEl.appendChild(li);
  });
});
