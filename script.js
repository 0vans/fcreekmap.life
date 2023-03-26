var zerod = 0;
var images = [
  
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/LOVERS.png?v=1679792417495",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/GRASS.png?v=1679792414291",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/CARS.png?v=1679792412285",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/TEXT.png?v=1679792426051",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/NATURE.png?v=1679792420004",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/SKATER.png?v=1679792423071",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/TREES.png?v=1679792431560",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/TRAIN.png?v=1679792429088"
  
]

function goNext() {
  zerod = (zerod < images.length - 1) ? ++zerod : 0;
  console.log(zerod)
  $("#sky").attr("src", images[zerod])
}

function goBack() {
  zerod = (zerod != 0) ? --zerod : images.length -1;
    console.log(zerod)
  $("#sky").attr("src", images[zerod])
};