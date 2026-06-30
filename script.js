// ==========================================
// 🌟 DYNAMIC LOCAL IMAGES REGISTRATION SYSTEM 🌟
// ==========================================
const userUploadedImages = [
    'img1.heic',
    'img2.heic',
    'img3.heic',
    'img4.heic',
    'img5.heic',
    'img6.heic',
    'img7.heic',
    'img8.heic',
    'img9.heic',
    'img10.heic',
    'img11.heic',
    'img12.heic',
    'img13.heic',
    'img14.heic',
    'img15.heic',
    'img16.heic',
    'img17.heic',
    'img18.heic',
    'img19.heic',
    'img20.heic',
    'img21.heic',
    'img22.heic',
    'img23.heic',
    'img24.heic',
    'img25.heic',
    'img26.heic',
    'img27.heic',
    'img28.heic',
    'img29.heic',
    'img30.heic',
    'img31.heic',
    'img32.heic',
    'img33.heic',
    'img34.heic',
    'img35.heic',
    'img36.heic',
    'img37.heic',
    'img38.heic',
    'img39.heic',
    'img40.heic',
    'img41.heic',
    'img42.heic',
    'img43.heic',
    'img44.heic',
    'img45.heic',
    'img46.heic',
    'img47.heic',
    'img48.heic',
    'img49.heic',
    'img50.heic',
    'img51.heic',
    'img52.heic',
    'img53.heic',
    'img54.heic',
    'img55.heic',
    'img56.heic',
    'img57.heic',
    'img58.heic',
    'img59.heic',
    'img60.heic',
    'img61.heic',
    'img62.heic',
    'img63.heic',
    'img64.heic',
    'img65.heic',
    'img66.heic',
    'img67.heic',
    'img68.heic',
    'img69.heic',
    'img70.heic',
    'img71.heic',
    'img72.heic',
    'img73.heic',
    'img74.heic',
    'img75.heic',
    'img76.heic',
    'img77.heic',
    'img78.heic',
    'img79.heic',
    'img80.heic',
    'img81.heic',
    'img82.heic',
    'img83.heic',
    'img84.heic',
    'img85.heic',
    'img86.heic',
    'img87.heic',
    'img88.heic',
    'img89.heic',
    'img90.heic',
    'img91.heic',
    'img92.heic',
    'img93.heic',
    'img94.heic',
    'img95.heic',
    'img96.heic',
    'img97.heic',
    'img98.heic',
    'img99.heic',
    'img100.heic',
    'img101.heic',
    'img102.heic',
    'img103.heic',
    'img104.heic',
    'img105.heic',
    'img106.heic',
    'img107.heic',
    'img108.heic',
    'img109.heic',
    'img110.heic',
    'img111.heic',
    'img112.heic',
    'img113.heic',
    'img114.heic',
    'img115.heic',
    'img116.heic',
    'img117.heic',
    'img118.heic',
    'img119.heic',
    'img120.heic',
    'img121.heic',
    'img122.heic',
    'img123.heic',
    'img124.heic',
    'img125.heic',
    'img126.heic',
    'img127.heic',
    'img128.heic',
    'img129.heic',
    'img130.heic',
    'img131.heic',
    'img132.heic',
    'img133.heic',
    'img134.heic',
    'img135.heic',
    'img136.heic',
    'img137.heic',
    'img138.heic',
    'img139.heic',
    'img140.heic',
    'img141.heic',
    'img142.heic',
    'img143.heic',
    'img144.heic',
    'img145.heic',
    'img146.heic',
    'img147.heic',
    'img148.heic',
    'img149.heic',
    'img150.heic',
    'img151.heic',
    'img152.heic',
    'img153.heic',
    'img154.heic',
    'img155.heic',
    'img156.heic',
    'img157.heic',
    'img158.heic',
    'img159.heic',
    'img160.heic',
    'img161.heic',
    'img162.heic',
    'img163.heic',
    'img164.heic',
    'img165.heic',
    'img166.heic',
    'img167.heic',
    'img168.heic',
    'img169.heic',
    'img170.heic',
    'img171.heic',
    'img172.heic',
    'img173.heic',
    'img174.heic',
    'img175.heic',
    'img176.heic',
    'img177.heic',
    'img178.heic',
    'img179.heic',
    'img180.heic',
    'img181.heic',
    'img182.heic',
    'img183.heic',
    'img184.heic',
    'img185.heic',
    'img186.heic',
    'img187.heic',
    'img188.heic',
    'img189.heic',
    'img190.heic',
    'img191.heic',
    'img192.heic',
    'img193.heic',
    'img194.heic',
    'img195.heic',
    'img196.heic',
    'img197.heic',
    'img198.heic',
    'img199.heic',
    'img200.heic',
    'img201.heic',
    'img202.heic',
    'img203.heic',
    'img204.heic',
    'img205.heic',
    'img206.heic',
    'img207.heic',
    'img208.heic',
    'img209.heic',
    'img210.heic',
    'img211.heic',
    'img212.heic',
    'img213.heic',
    'img214.heic',
    'img215.heic',
    'img216.heic',
    'img217.heic',
    'img218.heic',
    'img219.heic',
    'img220.heic',
    'img221.heic',
    'img222.heic',
    'img223.heic',
    'img224.heic',
    'img225.heic',
    'img226.heic',
    'img227.heic',
    'img228.heic',
    'img229.heic',
    'img230.heic',
    'img231.heic',
    'img232.heic',
    'img233.heic',
    'img234.heic',
    'img235.heic',
    'img236.heic',
    'img237.heic',
    'img238.heic',
    'img239.heic',
    'img240.heic',
    'img241.heic',
    'img242.heic',
    'img243.heic',
    'img244.heic',
    'img245.heic',
    'img246.heic',
    'img247.heic',
    'img248.heic',
    'img249.heic',
    'img250.heic',
    'img251.heic',
    'img252.heic',
    'img253.heic',
    'img254.heic',
    'img255.heic',
    'img256.heic',
    'img257.heic',
    'img258.heic',
    'img259.heic',
    'img260.heic',
    'img261.heic',
    'img262.heic',
    'img263.heic',
    'img264.heic',
    'img265.heic',
    'img266.heic',
    'img267.heic',
    'img268.heic',
    'img269.heic',
    'img270.heic',
    'img271.heic',
    'img272.heic',
    'img273.heic',
    'img274.heic',
    'img275.heic',
    'img276.heic',
    'img277.heic',
    'img278.heic',
    'img279.heic',
    'img280.heic',
    'img281.heic',
    'img282.heic',
    'img283.heic',
    'img284.heic',
    'img285.heic',
    'img286.heic',
    'img287.heic',
    'img288.heic',
    'img289.heic',
    'img290.heic',
    'img291.heic',
    'img292.heic',
    'img293.heic',
    'img294.heic',
    'img295.heic',
    'img296.heic',
    'img297.heic',
    'img298.heic',
    'img299.heic',
    'img300.heic',
    'img301.heic',
    'img302.heic',
    'img303.heic',
    'img304.heic',
    'img305.heic',
    'img306.heic',
    'img307.heic',
    'img308.heic',
    'img309.heic',
    'img310.heic',
    'img311.heic',
    'img312.heic',
    'img313.heic',
    'img314.heic',
    'img315.heic',
    'img316.heic',
    'img317.heic',
    'img318.heic',
    'img319.heic',
    'img320.heic',
    'img321.heic',
    'img322.heic',
    'img323.heic',
    'img324.heic',
    'img325.heic',
    'img326.heic',
    'img327.heic',
    'img328.heic',
    'img329.heic',
    'img330.heic',
    'img331.heic',
    'img332.heic',
    'img333.heic',
    'img334.heic',
    'img335.heic',
    'img336.heic',
    'img337.heic',
    'img338.heic',
    'img339.heic',
    'img340.heic',
    'img341.heic',
    'img342.heic',
    'img343.heic',
    'img344.heic',
    'img345.heic',
    'img346.heic',
    'img347.heic',
    'img348.heic',
    'img349.heic',
    'img350.heic',
    'img351.heic',
    'img352.heic',
    'img353.heic',
    'img354.heic',
    'img355.heic',
    'img356.heic',
    'img357.heic',
    'img358.heic',
    'img359.heic',
    'img360.jpg',
    'img361.jpg',
    'img362.jpg'
];

// ==========================================
// 🌟 DYNAMIC LOCAL MP4 VIDEOS REGISTRATION 🌟
// ==========================================
const userUploadedVideos = [
    'MBit Music-010722-042555.mp4',
    'MBit Music-020722-121103.mp4',
    'MBit Music-020723-060518.mp4',
    'MBit Music-100422-030346.mp4',
    'MBit Music-100422-031949.mp4',
    'MBit Music-181222-052535.mp4',
    'MBit Music-300622-084021.mp4'
];

let ytPlayingState = true;
let audioFadeInterval = null;

// Pagination variables for Image Gallery
let currentRenderedIndex = 0;
const IMAGES_PER_BATCH = 6; 

document.addEventListener('DOMContentLoaded', () => {
    
    document.documentElement.style.setProperty('--img-count', userUploadedImages.length);

    // Bind Interface Elements
    const gateway = document.getElementById('welcome-screen');
    if (gateway) gateway.addEventListener('click', initMagicEnvironment);

    const musicBtn = document.getElementById('music-toggle-btn');
    if (musicBtn) musicBtn.addEventListener('click', toggleMusicManually);

    const ytBtn = document.getElementById('yt-control-btn');
    if (ytBtn) ytBtn.addEventListener('click', toggleYouTubeVideo);

    // See More Button Listener
    const seeMoreBtn = document.getElementById('see-more-btn');
    if (seeMoreBtn) seeMoreBtn.addEventListener('click', loadNextImageBatch);

    // Dynamic Ring Box Click Listeners
    const localBox = document.getElementById('scrolling-ring-box');
    if (localBox) localBox.addEventListener('click', launchProposalPopup);

    const yesBtn = document.getElementById('yes-button');
    if (yesBtn) yesBtn.addEventListener('click', closeProposalPopup);

    // Secret Gift Click Surprise Listener (NEW)
    const revealGiftBtn = document.getElementById('reveal-gift-btn');
    if (revealGiftBtn) revealGiftBtn.addEventListener('click', triggerSecretGiftSurprise);

    // Asset Loading Initialization
    buildInitialAssetStructures();

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
function buildInitialAssetStructures() {
    const track = document.getElementById('auto-image-track');
    const videoGrid = document.getElementById('local-video-grid');
    
    if(userUploadedImages.length > 0) {
        const doubleList = [...userUploadedImages, ...userUploadedImages]; 
        doubleList.forEach((filename) => {
            const card = document.createElement('div');
            card.className = 'slider-card';
            const img = document.createElement('img');
            img.src = `images/${filename}`;
            card.appendChild(img);
            if(track) track.appendChild(card);
        });

        loadNextImageBatch();
    }

    userUploadedVideos.forEach((filename) => {
        const card = document.createElement('div');
        card.className = 'local-video-card scroll-fade-element';

        const video = document.createElement('video');
        video.src = `videos/${filename}`;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute('preload', 'auto');
        
        const btn = document.createElement('button');
        btn.className = 'custom-video-btn';
        btn.innerText = '⏸ Pause';

        btn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                btn.innerText = '⏸ Pause';
            } else {
                video.pause();
                btn.innerText = '▶ Play';
            }
        });

        card.appendChild(video);
        card.appendChild(btn);
        if(videoGrid) videoGrid.appendChild(card);
    });
}

// Incremental Image Batch Loading Engine
function loadNextImageBatch() {
    const grid = document.getElementById('gallery-grid');
    const seeMoreBtn = document.getElementById('see-more-btn');
    if (!grid) return;

    const nextBatchLimit = currentRenderedIndex + IMAGES_PER_BATCH;
    const itemsToRender = userUploadedImages.slice(currentRenderedIndex, nextBatchLimit);

    itemsToRender.forEach((filename) => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame scroll-fade-element revealed'; 
        const randomTilt = (Math.random() * 8 - 4).toFixed(2);
        frame.style.setProperty('--rotation', `${randomTilt}deg`);

        const img = document.createElement('img');
        img.src = `images/${filename}`;

        frame.appendChild(img);
        grid.appendChild(frame);
    });

    currentRenderedIndex = nextBatchLimit;

    if (currentRenderedIndex >= userUploadedImages.length && seeMoreBtn) {
        seeMoreBtn.style.display = 'none';
    }
}

// Global Main Activator
function initMagicEnvironment() {
    const welcome = document.getElementById('welcome-screen');
    const main = document.getElementById('main-content');
    const musicBtn = document.getElementById('music-toggle-btn');
    
    welcome.style.opacity = '0';
    welcome.style.transform = 'translateY(-100vh)';
    
    setTimeout(() => {
        welcome.style.display = 'none';
        main.style.display = 'block';
        if(musicBtn) musicBtn.classList.remove('hidden-btn');
        
        setTimeout(() => { 
            main.style.opacity = '1'; 
            initAdvancedScrollFadeMechanics();
            playAllLocalVideos(); 
        }, 50);
    }, 800);

    attemptAudioPlay();
}

// Global Local Clips Trigger
function playAllLocalVideos() {
    const videos = document.querySelectorAll('.local-video-card video');
    videos.forEach(v => {
        v.play().catch(err => console.log("Local video autoplay log interrupted", err));
    });
}

// YouTube Player JavaScript API Bridge Toggle
function toggleYouTubeVideo() {
    const iframe = document.getElementById('youtube-player');
    const btn = document.getElementById('yt-control-btn');
    if (!iframe || !btn) return;

    if (ytPlayingState) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        btn.innerText = "▶ Play Video";
        ytPlayingState = false;
    } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        btn.innerText = "⏸ Pause Video";
        ytPlayingState = true;
    }
}

// Media Track Audio Playback Drivers (FIXED 50% VOLUME INTENSITY TARGET NATIVELY)
function attemptAudioPlay() {
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle-btn');
    
    if (audio) {
        audio.volume = 0.5; // Strict 50% ambient volume ceiling configuration
        audio.play().then(() => {
            if(musicBtn) {
                musicBtn.innerText = "⏸ Pause Music";
                musicBtn.classList.add('playing');
            }
        }).catch(err => {
            console.log("Audio contexts pending verification.", err);
        });
    }
}

function toggleMusicManually() {
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle-btn');
    if (!audio || !musicBtn) return;

    if (audio.paused) {
        audio.play();
        audio.volume = 0.5;
        musicBtn.innerText = "⏸ Pause Music";
        musicBtn.classList.add('playing');
    } else {
        audio.pause();
        musicBtn.innerText = "🎵 Play Music";
        musicBtn.classList.remove('playing');
    }
}

// 🌟 INTERACTIVE SECRET GIFT VISUAL SURPRISE ENGINE (NEW) 🌟
function triggerSecretGiftSurprise() {
    const wrapper = document.getElementById('secret-gift-wrapper');
    const cover = document.getElementById('gift-mystery-cover');
    const content = document.getElementById('gift-unveiled-content');
    
    if(!wrapper || !cover || !content) return;

    // 1. Swap visibility wrappers smoothly
    cover.style.display = 'none';
    wrapper.classList.remove('gift-sealed');
    wrapper.classList.add('gift-opened');
    content.classList.remove('gift-content-hidden');
    
    // 2. Trigger dual-side horizontal vector canvas firework particles explosion
    launchSurpriseFireworksEngine();
}

function launchSurpriseFireworksEngine() {
    const container = document.getElementById('fireworks-container');
    if(!container) return;

    // Build immediate double explosion flashes on both edges of screen
    for (let side = 0; side < 2; side++) {
        const isLeft = side === 0;
        const spawnX = isLeft ? window.innerWidth * 0.2 : window.innerWidth * 0.8;
        const spawnY = window.innerHeight * 0.6;

        // Generate particle fragments arrays
        for(let p = 0; p < 60; p++) {
            const star = document.createElement('div');
            star.innerHTML = Math.random() > 0.5 ? '✨' : (Math.random() > 0.5 ? '🎉' : '💖');
            star.style.position = 'fixed';
            star.style.left = spawnX + 'px';
            star.style.top = spawnY + 'px';
            star.style.fontSize = Math.random() * 16 + 12 + 'px';
            star.style.zIndex = '19000';
            star.style.pointerEvents = 'none';
            star.style.transition = 'transform 1.8s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.8s ease-out';
            
            container.appendChild(star);

            // Compute dynamic target trajectories
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 250 + 100;
            const targetX = Math.cos(angle) * velocity;
            const targetY = Math.sin(angle) * velocity + 100; // Adding gravity force simulation downward

            setTimeout(() => {
                star.style.transform = `translate(${targetX}px, ${targetY}px) scale(0.5)`;
                star.style.opacity = '0';
            }, 30);

            setTimeout(() => { star.remove(); }, 1900);
        }
    }
}

// --- INTERACTIVE POPUP PROPOSAL ENGINE ---
function launchProposalPopup() {
    const overlay = document.getElementById('ring-popup-overlay');
    const popupBox = document.getElementById('popup-box-model');
    const bgMusic = document.getElementById('bg-music');
    const proposalTone = document.getElementById('proposal-tone');

    if (!overlay || !popupBox) return;

    overlay.classList.remove('popup-overlay-hidden');
    
    let angle = 0;
    clearInterval(window.popupSpinInterval); 
    window.popupSpinInterval = setInterval(() => {
        angle += 1;
        popupBox.style.transform = `rotateX(-20deg) rotateY(${angle}deg)`;
    }, 30);

    setTimeout(() => {
        popupBox.classList.add('open');
    }, 600);

    fadeAudioChannel(bgMusic, 'out', 800, () => {
        if(proposalTone) {
            proposalTone.currentTime = 0;
            proposalTone.volume = 0.5; // Maintain soft target tone parameters
            proposalTone.play().catch(e => console.log("Audio unblock context trace", e));
        }
    });
}

function closeProposalPopup() {
    const overlay = document.getElementById('ring-popup-overlay');
    const popupBox = document.getElementById('popup-box-model');
    const bgMusic = document.getElementById('bg-music');
    const proposalTone = document.getElementById('proposal-tone');

    if (!overlay || !popupBox) return;

    popupBox.classList.remove('open');
    clearInterval(window.popupSpinInterval);

    setTimeout(() => {
        overlay.classList.add('popup-overlay-hidden');
    }, 500);

    if(proposalTone) proposalTone.pause();
    fadeAudioChannel(bgMusic, 'in', 1000);
}

function fadeAudioChannel(audioElement, direction, duration, callback) {
    if (!audioElement) return;
    clearInterval(audioFadeInterval);

    const steps = 20;
    const stepTime = duration / steps;
    let currentStep = 0;

    if (direction === 'in') {
        audioElement.volume = 0;
        audioElement.play().catch(e => console.log(e));
    }

    audioFadeInterval = setInterval(() => {
        currentStep++;
        let maxCap = 0.5; // Ensure cross-fades cap at strict 50% limit settings
        let targetVolume = direction === 'out' ? maxCap - (currentStep / steps) * maxCap : (currentStep / steps) * maxCap;
        audioElement.volume = Math.max(0, Math.min(maxCap, targetVolume));

        if (currentStep >= steps) {
            clearInterval(audioFadeInterval);
            if (direction === 'out') audioElement.pause();
            if (callback) callback();
        }
    }, stepTime);
}

// --- Smooth 3D Objects Scroll Transform Mechanics ---
// --- Smooth 3D Objects Scroll Transform Mechanics ---
function initAdvancedScrollFadeMechanics() {
    const fadeElements = document.querySelectorAll('.scroll-fade-element');
    const heartContainer = document.getElementById('scrolling-cake');
    const ringBoxContainer = document.getElementById('scrolling-ring-box');
    const ringBoxLid = document.getElementById('ring-box-lid');
    
    const triggerCoreScrollActions = () => {
        // ... (fadeElements කොටස එලෙසම තබන්න) ...
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 0;
            if(isVisible) { el.classList.add('revealed'); }
        });

        // ගණනය කිරීම් සඳහා ස්ථාවර percent එකක් ලබා ගැනීම
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0; 
        
        // 1. Heart Container Movement (දැන් වේගය percent එක මත පමණක් රඳා පවතී)
        if(heartContainer) {
            const isMobile = window.innerWidth < 768;
            const horizontalFactor = isMobile ? 30 : 150; 
            const verticalTravelDistance = isMobile ? 45 : 55;

            const xShiftPosition = Math.sin(percent * Math.PI * 2) * horizontalFactor;
            const yShiftPosition = 25 + (percent * verticalTravelDistance);

            heartContainer.style.right = `calc(${isMobile ? 4 : 12}% - ${xShiftPosition}px)`;
            heartContainer.style.top = `${yShiftPosition}%`;
        }

        // 2. Ring Box Movement
        if(ringBoxContainer && ringBoxLid) {
            // මෙහිදී scrollY වෙනුවට percent භාවිතා කරන්න
            const targetLidAngle = -110 - (percent * 70);
            ringBoxLid.style.transform = `rotateX(${targetLidAngle}deg) translateY(-120px)`;

            const boxWaveX = Math.sin(percent * Math.PI) * 20;
            const boxModel = ringBoxContainer.querySelector('.ring-box-3d');
            
            const overlay = document.getElementById('ring-popup-overlay');
            const isOverlayHidden = overlay ? overlay.classList.contains('popup-overlay-hidden') : true;

            if(boxModel && isOverlayHidden) {
                // scrollY * 0.05 වෙනුවට percent එකට ගැලපෙන අගයක් යොදන්න (උදා: percent * 100)
                boxModel.style.transform = `rotateX(-25deg) rotateY(${35 + (percent * 100)}deg) translateX(${boxWaveX}px)`;
            }
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
