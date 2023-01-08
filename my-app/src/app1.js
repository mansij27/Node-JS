const f = require('./fun')
const nms = require('./modEx')
const { message, myDateTime } = require('./fun1')
    // const nms= require('./2-nmEx')

f(nms.nm)
f(nms.sm)
message(nms.nm)
message(nms.sm)
console.log(myDateTime());