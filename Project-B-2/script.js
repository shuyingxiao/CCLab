
window.addEventListener('scroll', function () {
  // 获取滚动距离
  const scrollTop = window.scrollY;
  // 将盒子的偏移量设置为滚动距离的一半
  const box = document.querySelector('.box');
  box.style.transform = `translateX(${scrollTop * (-3)}px)`;
});

