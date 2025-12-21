import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import useCountryInfo from './hooks/useCountryInfo';

export default function App() {
  const [selectCurrency, setSelectCurrency] = useState('inr');
  const [currencyComperator, setCurrencyComperator] = useState('greater');
  const [currencyComparisionInfoList, setCurrencyComparisionInfoList] = useState([]);

  const currencyInfo = useCurrencyInfo(selectCurrency);
  const currencyOptions = Object.keys(currencyInfo || {});
  const currencyCountryInfo = useCountryInfo();
  const options = ['greater', 'lesser'];

  const onCurrencyChange = (currencyCode) => {
    setSelectCurrency(currencyCode);
    setCurrencyComparisionInfoList([]);
  };

  const getCountryList = () => {
    const currencyComparisionInfo = [];
    if (!currencyInfo || !currencyCountryInfo) return;
    if (currencyComperator === 'greater') {
      currencyOptions.forEach((currOption) => {
        if (currencyInfo[currOption] < 1)
          currencyComparisionInfo.push([currOption, currencyCountryInfo[currOption], currencyInfo[currOption]]);
      });
    } else {
      currencyOptions.forEach((currOption) => {
        if (currencyInfo[currOption] > 1)
          currencyComparisionInfo.push([currOption, currencyCountryInfo[currOption], currencyInfo[currOption]]);
      });
    }
    setCurrencyComparisionInfoList(currencyComparisionInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
      <header className="px-6 py-5 bg-white/80 backdrop-blur-sm border-b border-indigo-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-indigo-700">Currency Insight</h1>
          <div className="flex items-center gap-2 text-sm text-indigo-600">
            <span className="inline-flex h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
            Live UI
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white shadow-lg rounded-2xl ring-1 ring-indigo-100">
            <div className="p-6 border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-fuchsia-50 rounded-t-2xl">
              <h2 className="text-lg font-semibold text-indigo-800">Controls</h2>
              <p className="text-sm text-indigo-600">Choose base currency and comparison</p>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-indigo-700 mb-2">
                  Currency Type
                </label>
                <div className="relative">
                  <select
                    id="currency"
                    className="w-full rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-indigo-900 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                  >
                    {currencyOptions?.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-2.5 text-indigo-400">▼</span>
                </div>
              </div>

              <div>
                <label htmlFor="comparator" className="block text-sm font-medium text-fuchsia-700 mb-2">
                  Comparison
                </label>
                <div className="relative">
                  <select
                    id="comparator"
                    className="w-full rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-3 py-2 text-fuchsia-900 outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                    value={currencyComperator}
                    onChange={(e) => setCurrencyComperator(e.target.value)}
                  >
                    {options?.map((o) => (
                      <option key={o} value={o}>
                        {o === 'greater' ? 'Show rates < 1' : 'Show rates > 1'}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-2.5 text-fuchsia-400">▼</span>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={getCountryList}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-2.5 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-fuchsia-700 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Get the country list
                </button>
                <div className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Base: {selectCurrency.toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl ring-1 ring-fuchsia-100 p-6">
            <h3 className="text-lg font-semibold text-fuchsia-700">Summary</h3>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 px-4 py-3">
                <span className="text-indigo-700">Options</span>
                <span className="text-indigo-900 font-semibold">{currencyOptions.length}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 px-4 py-3">
                <span className="text-fuchsia-700">Results</span>
                <span className="text-fuchsia-900 font-semibold">{currencyComparisionInfoList.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {currencyComparisionInfoList.length > 0 ? (
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-indigo-100 shadow-lg">
              <div className="p-5 border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-fuchsia-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-indigo-800">Comparison Results</h2>
                    <p className="text-sm text-indigo-600">
                      Rates {currencyComperator === 'greater' ? '< 1' : '> 1'} vs {selectCurrency.toUpperCase()}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-3 py-1 text-xs font-semibold text-white">
                      {currencyComparisionInfoList.length} items
                    </span>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-indigo-100">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                        Country
                      </th>
                      <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                        Price Rate
                      </th>
                      <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                        Country Code
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-100">
                    {currencyComparisionInfoList.map((info, idx) => (
                      <tr
                        key={info[0]}
                        className={
                          idx % 2 === 0 ? 'bg-white hover:bg-indigo-50/60' : 'bg-indigo-50/40 hover:bg-indigo-100/60'
                        }
                      >
                        <td className="px-4 md:px-6 py-3 text-indigo-900">{info[1] || '—'}</td>
                        <td className="px-4 md:px-6 py-3">
                          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-100 to-fuchsia-100 px-3 py-1 text-sm font-semibold text-indigo-900">
                            {Number(info[2]).toFixed(4)}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-3 text-fuchsia-800 font-mono">{info[0]?.toUpperCase()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-indigo-200 bg-white p-8 text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 grid place-items-center text-white text-xl font-bold">
                €
              </div>
              <h3 className="mt-4 text-lg font-semibold text-indigo-800">No results yet</h3>
              <p className="text-sm text-indigo-600">Select options and click the button to see countries.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-[1px]">
          <div className="rounded-2xl bg-white/90 px-6 py-5 flex items-center justify-between">
            <span className="text-sm text-indigo-800">Made with React + Tailwind</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700">
              <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-ping"></span>
              Smooth UI
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
