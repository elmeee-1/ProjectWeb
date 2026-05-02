
        // WHAT TO DO PAFE JAVASCRIPT CODE
        function showCustomMessage(tripTitle) {
            const toast = document.createElement('div');
            toast.className = 'custom-toast';
            toast.innerHTML = `
                ✨ Thank you! A travel specialist will contact you about "${tripTitle}". Feel the magic of Morocco.
                <button class="close-toast">✕</button>
            `;
            document.body.appendChild(toast);

            toast.querySelector('.close-toast').onclick = () => toast.remove();

            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 5000);
        }

        const tripsData = [
            {
                id: "sahara",
                title: "Adveture trip to Sahara desert",
                tagline: "Whispers of golden dunes & starlit nights",
                heroImg: "Picturs/sliders.pic/sahara-slide.jpg",
                mainDescription:" Merzouga offers a true desert adventure with golden dunes, thrilling activities, and unforgettable nights under the stars. Experience camel trekking, sandboarding, and Berber culture in a luxury camp setting. A magical escape into the heart of the Sahara.",
                duration: "3 Day / 2 Night",
                bestSeason: "Oct - Apr",
                groupSize: "2-12 travelers",
                priceFrom: "290€",
                highlights: ["Sunset camel trekking", "Sahara dunes", "Camel trekking", "Starry sky"],
                activities: ["Camel ride", "Stargazing", "Quad biking", "Sandboarding"],
                gallery: [
                    "Picturs/sahara1.jpg",
                    "Picturs/sahara2.jpg",
                    "Picturs/sahara3.jpg"
                ]
            },
            {
                id: "marrakech",
                title: "Cultural trip to Marrakech",
                tagline: "Red city, vibrant souks & royal gardens",
                heroImg: "Picturs/marackech-slide.jpg",
                mainDescription: "Immerse in the sensory overload of Jemaa el-Fnaa, explore hidden palaces, Majorelle gardens, and traditional riads. Marrakech blends ancient heritage with modern art and culinary excellence.",
                duration: "7 Day / 6 Night",
                bestSeason: "Mar - May / Sep - Nov",
                groupSize: "2-10 travelers",
                priceFrom: "€550",
                highlights: ["Jemaa el-Fnaa square", "Medina & souks", "Souks shopping","place and riads"],
                activities: ["Cooking class", "Hot air balloon (optional)", "Marrakech walking tour", "Berber market visit"],
                gallery: [
                    "Picturs/marackech1.jpg",
                    "Picturs/marackech2.jpg",
                    "Picturs/marackech3.jpg"
                ]
            },
            {
                id: "essaouira",
                title: "Coastal trip to Essaouira",
                tagline: "Atlantic breeze & bohemian coastline",
                heroImg: "Picturs/essaouira-slide.jpg",
                mainDescription: "Whitewashed medina, crashing waves, and a laid-back vibe. Essaouira is a coastal gem perfect for windsurfing, fresh seafood, and wandering through art galleries. A serene seaside escape.",
                duration: "3 Day / 2 Night",
                bestSeason: "Apr - Oct",
                groupSize: "2-15 travelers",
                priceFrom: "€220",
                highlights: ["Skala de la Ville", "Port & blue boats", "Gnaoua music", "Wind & kite surfing", "Fresh fish market"],
                activities: ["Surf lessons", "Camel riding on beach", "Art workshop", "Boat trip"],
                gallery: [
                    "Picturs/essaouira1.jpg",
                    "Picturs/essaouira2.jpg",
                    "Picturs/essaouira3.jpg"
                ]
            },
            {
                id: "atlas",
                title: "Atlas sernity trip",
                tagline: "Valleys, waterfalls & Berber villages",
                heroImg: "Picturs/atlas-slide.jpg",
                mainDescription: "Trek through the High Atlas, visit remote Berber communities, and witness breathtaking waterfalls like Ouzoud. Adventure meets culture in Morocco’s rooftop wilderness.",
                duration: "2 Day / 1 Night (day trips available)",
                bestSeason: "Apr - Jun / Sep - Oct",
                groupSize: "2-12 hikers",
                priceFrom: "€200",
                highlights: ["Imlil valley", "Toubkal base camp", "Berber tea ceremonies", "Waterfalls hike", "Mule-assisted trek"],
                activities: ["Guided mountain trekking", "Mule trek", "Village homestay", "Photography tour"],
                gallery: [
                    "Picturs/atlas1.jpg",
                    "Picturs/atlas2.jpg",
                    "Picturs/atlas3.jpg"
                ]
            },
            {
                id: "chefchaouen",
                title: "Photography trip to Chefchaouen",
                tagline: "The magical blue pearl of Rif",
                heroImg: "Picturs/chefchaouen-slide.jpg",
                mainDescription: "Wander through blue-washed alleyways, enjoy panoramic mountain views, and feel the artistic soul of Chefchaouen. One of the most photogenic and peaceful towns in Morocco.",
                duration: "2 Day / 2 Night",
                bestSeason: "Apr - Oct",
                groupSize: "2-14 travelers",
                priceFrom: "€185",
                highlights: ["Blue Medina", "Spanish Mosque viewpoint", "Rif Mountains trek", "Local handwoven textiles", "Waterfall Akchour"],
                activities: ["Photography tour", "Hiking to Akchour", "Henna painting", "Mint tea ceremony"],
                gallery: [
                    "Picturs/Chefchaouen1.jpg",
                    "Picturs/chefchaouen2.jpg",
                    "Picturs/chefchaouen3.jpg"
                ]
            }
        ];

        const galleryContainer = document.getElementById('tripsGallery');
        const colorPalette = ['#ff6b35', '#f7931e', '#c69c6d', '#4ecdc4', '#95a5a6'];

        function buildCards() {
            galleryContainer.innerHTML = '';
            tripsData.forEach((trip, idx) => {
                const card = document.createElement('div');
                card.className = 'trip-card';
                card.setAttribute('data-trip-idx', idx);
                card.innerHTML = `
                    <div class="color-accent" style="background: ${colorPalette[idx % colorPalette.length]};"></div>
                    <div class="play-button"></div>
                    <div class="trip-overlay">
                        <h3>${trip.title}</h3>
                        <p>${trip.tagline.substring(0, 35)}</p>
                    </div>
                `;
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openTripDetail(idx);
                });
                galleryContainer.appendChild(card);
            });
        }

        function openTripDetail(index) {
            const trip = tripsData[index];
            if (!trip) return;

            const modal = document.getElementById('detailModal');
            const dynamicContainer = document.getElementById('dynamicDetailContent');
            const heroStyle = `background-image: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('${trip.heroImg}');`;
            
            const galleryHTML = trip.gallery.map((imgUrl, i) => 
                `<img src="${imgUrl}" alt="${trip.title} view ${i+1}" class="gallery-img" loading="lazy">`
            ).join('');
            
            const highlightsHTML = trip.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('');
            const activitiesHTML = trip.activities.map(act => `<span style="background:#f1e7df; padding:5px 12px; border-radius:40px; font-size:0.85rem;">${act}</span>`).join(' ');
            
            const contentHTML = `
                <div class="detail-hero" style="${heroStyle}">
                    <div class="detail-title">
                        <h2>${trip.title}</h2>
                        <p>${trip.tagline}</p>
                    </div>
                </div>
                <div class="detail-content">
                    <div class="info-grid">
                        <div class="info-card"><i class="fas fa-clock"></i><div><strong>Duration</strong><span>${trip.duration}</span></div></div>
                        <div class="info-card"><i class="fas fa-calendar-alt"></i><div><strong>Best Season</strong><span>${trip.bestSeason}</span></div></div>
                        <div class="info-card"><i class="fas fa-users"></i><div><strong>Group Size</strong><span>${trip.groupSize}</span></div></div>
                        <div class="info-card"><i class="fas fa-tag"></i><div><strong>From</strong><span>${trip.priceFrom} / person</span></div></div>
                    </div>
                    <div class="desc-section">
                        <div><h3>Overview</h3><p style="line-height:1.6;">${trip.mainDescription}</p></div>
                        <div><h3>✨ Highlights</h3><ul class="highlights-list">${highlightsHTML}</ul></div>
                        <div><h3>🏕️ Activities & Experiences</h3><div style="display: flex; flex-wrap: wrap; gap: 12px;">${activitiesHTML}</div></div>
                        <div>
                            <h3>📸 Visual Journey (3 real images)</h3>
                            <div class="gallery-mini">${galleryHTML}</div>
                        </div>
                        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 15px;">
                            <button class="back-trips" id="backToTripsBtn"><i class="fas fa-arrow-left"></i> Back to all trips</button>
                            <button class="btn-book" id="bookNowBtn"><i class="fas fa-heart"></i> Plan this journey</button>
                        </div>
                    </div>
                </div>
            `;
            
            dynamicContainer.innerHTML = contentHTML;
            modal.classList.add('active');
            document.body.classList.add('modal-open');
            
            const closeModal = () => {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            };
            
            const closeBtn = document.getElementById('closeModalBtn');
            const backBtn = document.getElementById('backToTripsBtn');
            const bookBtn = document.getElementById('bookNowBtn');
            
            if (closeBtn) closeBtn.onclick = closeModal;
            if (backBtn) backBtn.onclick = closeModal;
            if (bookBtn) {
                bookBtn.onclick = () => showCustomMessage(trip.title);
            }
            
            modal.addEventListener('click', function backdropHandler(e) {
                if (e.target === modal) {
                    closeModal();
                    modal.removeEventListener('click', backdropHandler);
                }
            });
        }
        
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            document.querySelector('.trip-section').scrollIntoView({ behavior: 'smooth' });
        });
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        });
        
        buildCards();
        
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('detailModal');
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});    