
//firstBox movement
// window.addEventListener('scroll', function () {
//   // 获取滚动距离
//   const scrollTop = window.scrollY;
//   // 将盒子的偏移量设置为滚动距离的一半
//   const box = document.querySelector('.firstBox');
//   //secondBox.style.transform = `translateY(${scrollTop * (1)}px)`
//   firstBox.style.transform = `translateX(${scrollTop * (-1)}px)`


// });

//secondBox movement
window.addEventListener('scroll', function () {
  // 获取滚动距离
  const scrollTop = window.scrollY;
  // 将盒子的偏移量设置为滚动距离的一半
  const box = document.querySelector('.secondBox');
  //secondBox.style.transform = `translateY(${scrollTop * (1)}px)`
  secondBox.style.transform = `translateX(${scrollTop * (-1)}px)`


});

window.addEventListener('scroll', function () {
  // 获取滚动距离
  const scrollTop = window.scrollY;
  // 将盒子的偏移量设置为滚动距离的一半
  const box = document.querySelector('.thirdBox');
  //secondBox.style.transform = `translateY(${scrollTop * (1)}px)`
  thirdBox.style.transform = `translateY(${scrollTop * (-1)}px)`


});


