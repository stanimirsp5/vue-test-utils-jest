// jest.mock("axios", () => ({
//   get: jest.fn(() => Promise.resolve({
//     data: 3
//   }))
// }))

module.exports = {

  //get: jest.fn(() => Promise.resolve({ data: [3] }))
  get: jest.fn(() => Promise.resolve({
    data: 3
  }))
}
