// 🌟 DYNAMIC LOCAL IMAGES ARRAY INPUT SYSTEM 🌟
const userUploadedImages = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    
    // Bind Interface Elements
    const gateway = document.getElementById('welcome-screen');
    if (gateway) gateway.addEventListener('click', initMagicEnvironment);

    const musicBtn = document.getElementById('music-toggle-btn');
    if (musicBtn) musicBtn.addEventListener('click', toggleMusicManually);

    // Dynamic Image Loading Assembly Initialization
    buildDynamicAssetStructures();

    // Precision Live Anniversary Counter Strategy (2019/12/11)
    const anniversaryDate = new Date('2019-12-11T00:00:00').getTime();
    setInterval(() => {
        const diff = new Date().getTime() - anniversaryDate;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        if(document.getElementById('days')) {
            document.getElementById('days').innerText = d < 10 ? '0'+d : d;
            document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
            document.getElementById('mins').innerText = m < 10 ? '0'+m : m;
            document.getElementById('secs').innerText = s < 10 ? '0'+s : s;
        }
    }, 1000);
});

// Dynamic Asset Builder Architecture Engine
function buildDynamicAssetStructures() {
    const track = document.getElementById('auto-image-track');
    const grid = document.getElementById('gallery-grid');
    
    const activeList = userUploadedImages.length > 0 ? userUploadedImages : ['img1.jpg', 'img2.jpg', 'img3.jpg'];

    // 1. Build Auto Image Carousel Loop Nodes
    const doubleList = [...activeList, ...activeList]; 
    doubleList.forEach((filename, index) => {
        const card = document.createElement('div');
        card.className = 'slider-card';
        const img = document.createElement('img');
        img.src = `images/${filename}`;
        img.onerror = function() { this.src = `https://picsum.photos/300/400?random=${index}`; };
        card.appendChild(img);
        if(track) track.appendChild(card);
    });

    // 2. Build Scroll-Fade Photo Frames Matrix Nodes
    activeList.forEach((filename, index) => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame scroll-fade-element';
        const randomTilt = (Math.random() * 8 - 4).toFixed(2);
        frame.style.setProperty('--rotation', `${randomTilt}deg`);

        const img = document.createElement('img');
        img.src = `images/${filename}`;
        img.onerror = function() { this.src = `https://picsum.photos/400/500?random=${index + 10}`; };

        frame.appendChild(img);
        if(grid) grid.appendChild(frame);
    });
}

// Global Main Activator Control Bridge
function initMagicEnvironment() {
    const welcome = document.getElementById('welcome-screen');
    const main = document.getElementById('main-content');
    const musicBtn = document.getElementById('music-toggle-btn');
    
    // Gate Dismiss Smooth Slide Transition
    welcome.style.opacity = '0';
    welcome.style.transform = 'translateY(-100vh)';
    
    setTimeout(() => {
        welcome.style.display = 'none';
        main.style.display = 'block';
        if(musicBtn) musicBtn.classList.remove('hidden-btn');
        
        setTimeout(() => { 
            main.style.opacity = '1'; 
            initAdvancedScrollFadeMechanics();
        }, 50);
    }, 800);

    // Direct initialization of safe core audio driver playback loops
    attemptAudioPlay();
}

// Media Track Audio Playback Drivers
function attemptAudioPlay() {
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle-btn');
    
    if (audio) {
        audio.play().then(() => {
            if(musicBtn) {
                musicBtn.innerText = "⏸ Pause Music";
                musicBtn.classList.add('playing');
            }
        }).catch(err => {
            console.log("Browser context blocked native stream autoplay initialization.", err);
        });
    }
}

// Custom Fixed Manual Audio Component Interrupter Function
function toggleMusicManually() {
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle-btn');
    if (!audio || !musicBtn) return;

    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "⏸ Pause Music";
        musicBtn.classList.add('playing');
    } else {
        audio.pause();
        musicBtn.innerText = "🎵 Play Music";
        musicBtn.classList.remove('playing');
    }
}

// --- Smooth 3D Heart Scroll Transform Wave Engine (Crash Proof CSS Mapping) ---
function initAdvancedScrollFadeMechanics() {
    const fadeElements = document.querySelectorAll('.scroll-fade-element');
    const heartContainer = document.getElementById('scrolling-cake');
    
    const triggerCoreScrollActions = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 0;
            if(isVisible) {
                el.classList.add('revealed');
            } else {
                el.classList.remove('revealed');
            }
        });

        // Beautiful S-Curve Horizontal Wave Scroll Algorithm for the CSS 3D Diamond Heart
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        if(maxScroll > 0 && heartContainer) {
            const percent = scrollY / maxScroll;
            
            const isMobile = window.innerWidth < 768;
            const horizontalFactor = isMobile ? 30 : 150; 
            const horizontalOffset = isMobile ? 4 : 12;
            const verticalTravelDistance = isMobile ? 45 : 55;

            // Mathematical calculation plotting: Sinusoidal wave track alignment for horizontal floating
            const xShiftPosition = Math.sin(percent * Math.PI * 2) * horizontalFactor;
            const yShiftPosition = 25 + (percent * verticalTravelDistance);

            heartContainer.style.right = `calc(${horizontalOffset}% - ${xShiftPosition}px)`;
            heartContainer.style.top = `${yShiftPosition}%`;
        }
    };

    window.addEventListener('scroll', triggerCoreScrollActions);
    triggerCoreScrollActions();
}

// Ambient Background Float Hearts Engine
setInterval(() => {
    const main = document.getElementById('main-content');
    if (!main || main.style.display !== 'block') return;
    
    const container = document.getElementById('particles');
    if (!container) return;

    const particle = document.createElement('div');
    particle.innerHTML = Math.random() > 0.4 ? '❤️' : '✨';
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    particle.style.fontSize = Math.random() * 14 + 10 + 'px';
    particle.style.opacity = Math.random() * 0.6 + 0.4;
    particle.style.transition = 'transform 7s linear, opacity 7s linear';
    particle.style.pointerEvents = 'none';
    
    container.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = `translateY(-105vh) translateX(${Math.random() * 80 - 40}px)`;
        particle.style.opacity = '0';
    }, 50);

    setTimeout(() => { particle.remove(); }, 7100);
}, 500);