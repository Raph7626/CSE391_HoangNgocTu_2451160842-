const images = [
    { id: 1, url: "https://picsum.photos/id/1015/800/500", title: "Mountain Landscape" },
    { id: 2, url: "https://picsum.photos/id/201/800/500", title: "Ocean View" },
    { id: 3, url: "https://picsum.photos/id/237/800/500", title: "Cute Dog" },
    { id: 4, url: "https://picsum.photos/id/431/800/500", title: "City Night" },
    { id: 5, url: "https://picsum.photos/id/870/800/500", title: "Forest Path" },
    { id: 6, url: "https://picsum.photos/id/1016/800/500", title: "Snow Mountain" },
    { id: 7, url: "https://picsum.photos/id/133/800/500", title: "Abstract Art" },
    { id: 8, url: "https://picsum.photos/id/201/800/500", title: "Beach Sunset" },
];

let currentIndex = 0;
let slideshowInterval = null;
let isPlaying = false;

// Render thumbnails
function renderThumbnails() {
    const container = document.getElementById('thumbnails');
    container.innerHTML = '';
    
    images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === currentIndex ? 'active' : ''}`;
        thumb.style.backgroundImage = `url(${img.url})`;
        thumb.onclick = () => {
            currentIndex = index;
            showImage();
        };
        container.appendChild(thumb);
    });
}

function showImage() {
    const main = document.getElementById('mainImage');
    main.style.backgroundImage = `url(${images[currentIndex].url})`;
    renderThumbnails();
}

// Slideshow
function toggleSlideshow() {
    if (isPlaying) {
        clearInterval(slideshowInterval);
        isPlaying = false;
    } else {
        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage();
        }, 2500);
        isPlaying = true;
    }
}

// Command Palette
const palette = document.getElementById('commandPalette');
const paletteSearch = document.getElementById('paletteSearch');
const commandList = document.getElementById('commandList');

const commands = [
    { name: "Chuyển ảnh tiếp theo", action: () => { currentIndex = (currentIndex + 1) % images.length; showImage(); } },
    { name: "Chuyển ảnh trước", action: () => { currentIndex = (currentIndex - 1 + images.length) % images.length; showImage(); } },
    { name: "Bật/Tắt Slideshow", action: toggleSlideshow },
    { name: "Chuyển sang Dark Mode", action: () => document.body.classList.toggle('dark-mode') },
    { name: "Làm mới trang", action: () => location.reload() },
];

function openPalette() {
    palette.style.display = 'block';
    paletteSearch.focus();
    renderCommands(commands);
}

function renderCommands(filteredCommands) {
    commandList.innerHTML = '';
    filteredCommands.forEach(cmd => {
        const li = document.createElement('li');
        li.textContent = cmd.name;
        li.onclick = () => {
            cmd.action();
            palette.style.display = 'none';
            paletteSearch.value = '';
        };
        commandList.appendChild(li);
    });
}

// Event Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        palette.style.display = 'none';
    }

    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
    }

    if (palette.style.display === 'block') return;

    // Gallery navigation
    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }
    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }
    if (e.key === " ") {
        e.preventDefault();
        toggleSlideshow();
    }

    // Number keys 1-8
    if (e.key >= '1' && e.key <= '8') {
        const index = parseInt(e.key) - 1;
        if (index < images.length) {
            currentIndex = index;
            showImage();
        }
    }
});

// Palette search
paletteSearch.addEventListener('input', () => {
    const term = paletteSearch.value.toLowerCase();
    const filtered = commands.filter(cmd => cmd.name.toLowerCase().includes(term));
    renderCommands(filtered);
});

// Khởi tạo
renderThumbnails();
showImage();

// Click ngoài palette để đóng
palette.addEventListener('click', (e) => {
    if (e.target === palette) palette.style.display = 'none';
});