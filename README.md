<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProjectWeb</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header> 
        <nav class="header" style="display:flex; justify-content:space-between; align-items:center;">
           <a href="index.html"><img src="Logo.png" alt="Home" class="logo"></a>
           <a href="index.html">Home</a>
            <a href="destinations.html">Destinations</a>
            <a href="about.html">About</a>
            <input class="search-box" type="search" placeholder="Search for a city 🔍" required>
            <button class="book-now">Book Now</button>
        </nav>
      </header>

<section id="home">
    <div class="slider-track" id="sliderTrack">

    <div class="slide">
        <div class="slide-label">
            <h2 class="slide-city">Jamaa Lafna</h2>
            <p class="slide-sub">★ 4.5 &nbsp;|&nbsp; Marrackech, Morocco</p>
        </div>
    </div>
 
      <div class="slide">
        <div class="slide-label">
          <div class="slide-city">Hassan tour</div>
          <div class="slide-sub">★ 4.2 &nbsp;|&nbsp; Rabat, Morocco</div>
        </div>
      </div>
 
      <div class="slide">
        <div class="slide-label">
          <div class="slide-city">Medina</div>
          <div class="slide-sub">★ 4.0 &nbsp;|&nbsp; Essaouira, Morocco</div>
        </div>
      </div> 
    </div>


    <button class="slider-arrow prev" id="prevBtn" aria-label="Previous">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8l5 5" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>


    <button class="slider-arrow next" id="nextBtn" aria-label="Next">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 3l5 5-5 5" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
 
    <div class="slider-dots" id="sliderDots">
      <button class="dot active" aria-label="Slide 1"></button>
      <button class="dot" aria-label="Slide 2"></button>
      <button class="dot" aria-label="Slide 3"></button>
    </div>

  </section>
 <script>
    const track = document.getElementById('sliderTrack');
    const dots  = document.querySelectorAll('.dot');
    const total = dots.length;
    let current = 0;
 
    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
 
    document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));
    document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
 
    // Auto-play
    setInterval(() => goTo(current + 1), 4000);
  </script>   

</body>
</html>
