import { device } from 'device.js'

const initialState = {
  isMobile: device.mobile,
  isTablet: device.tablet,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
