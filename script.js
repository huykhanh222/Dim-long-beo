let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const nextButton = document.getElementById('next');

// Ẩn tất cả các ảnh
function hideAllImages() {
  images.forEach((image) => {
    image.style.display = 'none';
  });
}

// Hiển thị ảnh theo index
function showImage(index) {
  hideAllImages();
  if (images[index]) {
    images[index].style.display = 'block';
  }
}

// Xử lý sự kiện nhấn nút "Xem tiếp ảnh"
nextButton.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Reset lại nếu đã hết ảnh
  }
  showImage(currentIndex);
});

// Hiển thị ảnh đầu tiên khi trang web tải
showImage(currentIndex);
