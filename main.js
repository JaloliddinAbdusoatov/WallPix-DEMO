document.addEventListener("DOMContentLoaded", function () {
    const accessKey = 'qRkzT2XtV_MdPzQVPT68f8-jGTfN0stNnHDsz1fvuR8';
    const galleryContainer = document.getElementById('image-gallery');
    const searchForm = document.getElementById('search');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Form yuborilishini oldini olamiz
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            fetchAndDisplayImages(searchTerm);
        }
    });

    function fetchAndDisplayImages(searchTerm) {
        const apiUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchTerm}&page=1&per_page=16`;

        galleryContainer.innerHTML = ""; // Eski rasmlarni tozalaymiz

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const photos = data.results;
                if (photos.length === 0) {
                    galleryContainer.innerHTML = "<p>Hech qanday natija topilmadi.</p>";
                    return;
                }

                photos.forEach(photo => {
                    const imageUrl = photo.urls.regular;
                    const imageElement = document.createElement('div');
                    imageElement.classList.add('grid-item');
                    imageElement.style.backgroundImage = `url(${imageUrl})`;
                    imageElement.dataset.img = imageUrl;
                    galleryContainer.appendChild(imageElement);
                });
            })
            .catch(error => console.error('Xatolik yuz berdi:', error));
    }
});



fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('API Error:', error));



    document.addEventListener("DOMContentLoaded", function () {
        const galleryContainer = document.getElementById('image-gallery');
        const popup = document.getElementById("popup");
        const popupImg = document.getElementById("popup-img");
        const downloadBtn = document.getElementById("download-btn");
        const closeButton = document.querySelector(".close");
    
        // Popup ochish (ko'z ikonkasini bosganda)
        galleryContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('eye-icon')) {
                event.preventDefault();
                const imgSrc = event.target.dataset.img;
                popupImg.src = imgSrc;
                downloadBtn.href = imgSrc;
                popup.classList.remove("hidden"); // Popupni ko‘rsatish
            }
        });
    
        // Popupni yopish (x tugmasi bosilganda)
        closeButton.addEventListener("click", function () {
            popup.classList.add("hidden");
        });
    
        // Popupni tashqaridan bosganda yopish
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.classList.add("hidden");
            }
        });
    });
    

