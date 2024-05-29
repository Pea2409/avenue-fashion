// Lấy ra các phần tử cần sử dụng
const showListButton = document.getElementById("showListButton");
const listNav = document.getElementById("list");

// Thêm sự kiện click cho nút show-bar
showListButton.addEventListener("click", function () {
  // Kiểm tra nếu chế độ hiển thị là tablet thì thêm hoặc loại bỏ lớp 'active' để ẩn/hiển thị list-nav
  if (window.innerWidth < 1024) {
    // Giả sử chiều rộng tablet là 768px
    listNav.classList.toggle("list-active");
  }
});
