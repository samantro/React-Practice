import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({})
  useEffect(() => {
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`

    fetch(url)
    .then((res)=> res.json())
    .then((res) => setData(res))
  }, []);
  // console.log(data);
  return data;
}

export default useCurrencyInfo;