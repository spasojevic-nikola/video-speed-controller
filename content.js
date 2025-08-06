function showSpeedOverlay(speed) {
    let overlay = document.getElementById('video-speed-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'video-speed-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '10px';
        overlay.style.left = '10px';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.color = '#fff';
        overlay.style.padding = '5px 10px';
        overlay.style.borderRadius = '8px';
        overlay.style.fontSize = '16px';
        overlay.style.zIndex = '9999';
        overlay.style.fontFamily = 'sans-serif';
        document.body.appendChild(overlay);
    }

    overlay.textContent = `Brzina: ${speed.toFixed(1)}x`;

    // Reset timer ako se već prikazuje
    if (overlay._timeout) clearTimeout(overlay._timeout);

    overlay._timeout = setTimeout(() => {
        overlay.remove();
    }, 1500);
}

document.addEventListener('keydown', function(event) {
    const video = document.querySelector('video');
    if (!video) return;

    if (event.key === 'd' || event.key === 'D') {
        video.playbackRate = Math.round((video.playbackRate + 0.1) * 10) / 10;
        showSpeedOverlay(video.playbackRate);
    }

    if (event.key === 's' || event.key === 'S') {
        video.playbackRate = Math.round((video.playbackRate - 0.1) * 10) / 10;
        showSpeedOverlay(video.playbackRate);
    }
});
