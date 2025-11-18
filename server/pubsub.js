const EventEmitter = require('events');
const ee = new EventEmitter();
module.exports = {
  publish: (topic, payload) => ee.emit(topic, payload),
  asyncIterator: (topic) => ({
    next: () => new Promise(resolve => ee.once(topic, data => resolve({ value: data, done: false })))
  })
};