(function() {
  const list = document.querySelector(".catalog-list")
  const aTags = list.querySelectorAll("a")
  const aArray = Array.from(aTags)
  return aArray.map((ele) => ele.title)
})()