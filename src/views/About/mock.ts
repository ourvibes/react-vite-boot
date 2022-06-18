
const randomNum = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min + 1))
}

const mocks = Array.from({ length: 30 }, (v, k) => k + 1).map(it => {
  return {
    time: `2022-06-${it.toString().padStart(2, '0')}`,
    value: randomNum(20, 200),
  }
})

export default mocks;