const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  x: { type: String, required: true },
  y: { type: Number, required: true },
});

const mockDataSchema = new mongoose.Schema({
  id: { type: String, required: true },
  color: { type: String, required: true },
  data: [dataSchema],
}, { collection: 'lineChartMockData' });

const MockData = mongoose.model('MockData', mockDataSchema);

module.exports = MockData;
