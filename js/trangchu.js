// Lấy tham chiếu đến phần tử h1 có id là "welcome"
const h1 = document.getElementById('welcome');

// Thiết lập biến để kiểm tra trạng thái của hiệu ứng nhấp nháy
let isBlinking = false;

// Hàm để thêm hoặc loại bỏ lớp "blink" từ phần tử h1
function toggleBlink() {
    if (isBlinking) {
        h1.classList.remove('blink');
    } else {
        h1.classList.add('blink');
    }
    isBlinking = !isBlinking;
}

// Kích hoạt hiệu ứng nhấp nháy mỗi 1 giây
setInterval(toggleBlink, 2000);

// ảnh

// Lấy tham chiếu đến phần tử chứa các hình ảnh
const imagesContainer = document.querySelector('.images');

// Lấy danh sách các hình ảnh
const images = document.querySelectorAll('.image');

// Lấy chiều rộng của mỗi ảnh
const imageWidth = images[0].offsetWidth;

// Lấy số lượng ảnh trên mỗi dòng
const imagesPerRow = Math.floor(imagesContainer.offsetWidth / imageWidth);

// Tính số dòng ảnh
const numRows = Math.ceil(images.length / imagesPerRow);

// Thiết lập thời gian chờ giữa các lần cuộn (milliseconds)
const interval = 15000;

// Thiết lập biến để lưu trữ chỉ số của hình ảnh đang hiển thị
let currentRow = 0;

// Biến lưu trữ ID của hàm setInterval
let intervalID;

// Hàm để chuyển sang dòng ảnh tiếp theo
function nextRow() {
    // Tăng chỉ số hiện tại lên 1
    currentRow++;

    // Nếu chỉ số vượt quá số lượng dòng, quay lại dòng đầu tiên
    if (currentRow >= numRows) {
        currentRow = 0;
    }

    // Cuộn đến vị trí của dòng ảnh tiếp theo
    imagesContainer.scrollTo({
        top: currentRow * imageWidth,
        behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
    });
}

// Thiết lập hàm setInterval để tự động chuyển đổi dòng ảnh
intervalID = setInterval(nextRow, interval);

// Dừng tự động chuyển đổi khi người dùng click vào ảnh
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Dừng tự động chuyển đổi
        clearInterval(intervalID);
        
        // Chuyển đến trang thư viện hình ảnh với chỉ số của ảnh được ấn
        window.location.href = `gallery.html#${index}`;
    });
});
