import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import Data from '../_config/data'
import CanvasUtils from '../js/classes/utils/canvasUtils.js'
const CanvasUtils_ = new CanvasUtils()

const el = document.querySelector('main')
if (el) {
  ReactDOM.render(<App />, el)
}

Data.winW = window.innerWidth
Data.winH = window.innerHeight
Data.canvas = document.getElementById('canvas')
Data.canvasContext = Data.canvas.getContext('2d')
drawCanvas()

let resizeTimer
window.addEventListener('resize', () => {
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer)
  }
  resizeTimer = setTimeout(() => {
    Data.winW = window.innerWidth
    Data.winH = window.innerHeight
  }, Data.fps)
})
function drawCanvas() {
  var canvas = Data.canvas,
    context = Data.canvasContext

  for (var i = 0; i < Data.numShapes; i++) {
    Data.shapes[i] = {
      x: CanvasUtils_.randomRange(-8000, 8000),
      y: CanvasUtils_.randomRange(-8000, 8000),
      z: CanvasUtils_.randomRange(0, 8000),
      radius: CanvasUtils_.randomRange(5, 30),
    }
  }
  update()

  function update() {
    var width = (canvas.width = Data.winW),
      height = (canvas.height = Data.winH)
    context.translate(width / 2, height / 2)
    context.clearRect(-width / 2, -height / 2, width, height)
    for (var i = 0; i < Data.numShapes; i += 1) {
      var shape = Data.shapes[i],
        perspective = Data.fl / (Data.fl + shape.z)
      context.save()
      context.translate(shape.x * perspective, shape.y * perspective)
      context.scale(perspective, perspective)
      context.beginPath()
      context.arc(0, 0, shape.radius, 0, Math.PI * 2, false)
      context.fillStyle = '#ffffff'
      context.fill()
      context.restore()
      shape.z -= 10
      if (shape.z < 0) {
        shape.z = CanvasUtils_.randomRange(5000, 10000)
      }
    }

    requestAnimationFrame(update)
  }
}

window.addEventListener('load', () => {
  document.body.className = 'load'
})

window.addEventListener('mousemove', e => {
  const ratioX = (Data.winW / 2 - e.pageX) * 0.03
  const ratioY = (Data.winH / 2 - e.pageY) * 0.01

  for (let i = 0; i < Data.numShapes; i++) {
    Data.shapes[i].x = Data.shapes[i].x + ratioX
    Data.shapes[i].y = Data.shapes[i].y + ratioY
  }
})
