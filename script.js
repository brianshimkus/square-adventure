const canvas = document.querySelector('canvas')
canvas.width = 300
canvas.height = 300
const ctx = canvas.getContext('2d')

let player_x = 20
let player_y = 20
let base_x = Math.floor(Math.random() * 250)
let base_y = Math.floor(Math.random() * 250)

function step() {
  ctx.clearRect(0, 0, 300, 300)
  ctx.fillStyle = 'red'
  ctx.fillRect(player_x, player_y, 10, 10)
  ctx.strokeRect(base_x, base_y, 50, 50)
  if (player_x >= base_x && player_y >= base_y && player_x <= base_x + 50 && player_y <= base_y +50) {
    base_x = Math.floor(Math.random() * 250)
    base_y = Math.floor(Math.random() * 250)
  }
  requestAnimationFrame(step)
}
requestAnimationFrame(step)

function handleInput(event) {
  const key = event.key
  if (key === 'a') {
    player_x -= 15
  } else if (key === 'w') {
    player_y -= 15
  } else if (key === 'd') {
    player_x += 15
  } else if (key === 's') {
    player_y += 15
  }
}

document.addEventListener('keypress', handleInput)