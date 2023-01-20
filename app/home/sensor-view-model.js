import { fromObject, Observable } from '@nativescript/core'

export function SensorViewModel() {
  const viewModel = new Observable()
  viewModel.x = 10
  viewModel.y = 20
  viewModel.z = 30

  var accelerometer = require("@triniwiz/nativescript-accelerometer")
  accelerometer.startAccelerometerUpdates(function(data) {
    viewModel.set('x', data.x)
    viewModel.set('y', data.y)
    viewModel.set('z', data.z)
  }, { sensorDelay: "ui" })
  
  return viewModel
}