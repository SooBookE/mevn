/* fetch는 nodejs에서 쓸 수 없는 웹용 구문이다. */
const value = () => {
  return new Promise((resolve, reject) => {
    const url =
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD";
    fetch(url)
      .then(response => response.json()) // json으로 변환 후 리턴.
      .then(data => {
        resolve(data[0].basePrice);
      });
  });
};