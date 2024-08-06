const MockData = require('./models/MockData');
require('dotenv').config();

const mockLineData = [
    {
      id: "japan",
      color: "red",
      data: [
        { x: "plane", y: 101 },
        { x: "helicopter", y: 75 },
        { x: "boat", y: 36 },
        { x: "train", y: 216 },
        { x: "subway", y: 35 },
        { x: "bus", y: 236 },
        { x: "car", y: 88 },
        { x: "moto", y: 232 },
        { x: "bicycle", y: 281 },
        { x: "horse", y: 1 },
        { x: "skateboard", y: 35 },
        { x: "others", y: 14 },
      ],
    },
    {
      id: "france",
      color: "blue",
      data: [
        { x: "plane", y: 212 },
        { x: "helicopter", y: 190 },
        { x: "boat", y: 270 },
        { x: "train", y: 9 },
        { x: "subway", y: 75 },
        { x: "bus", y: 175 },
        { x: "car", y: 33 },
        { x: "moto", y: 189 },
        { x: "bicycle", y: 97 },
        { x: "horse", y: 87 },
        { x: "skateboard", y: 299 },
        { x: "others", y: 251 },
      ],
    },
    {
      id: "us",
      color: "yellow",
      data: [
        { x: "plane", y: 191 },
        { x: "helicopter", y: 136 },
        { x: "boat", y: 91 },
        { x: "train", y: 190 },
        { x: "subway", y: 211 },
        { x: "bus", y: 152 },
        { x: "car", y: 189 },
        { x: "moto", y: 152 },
        { x: "bicycle", y: 8 },
        { x: "horse", y: 197 },
        { x: "skateboard", y: 107 },
        { x: "others", y: 170 },
      ],
    },
  ];

const insertMockData = async () => {
  try {
    await MockData.deleteMany();
    const result = await MockData.insertMany(mockLineData);
    console.log(`${result.length} documents were inserted`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = insertMockData;
