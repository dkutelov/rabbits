export default function Answer({ count }) {
  return (
    <div className="mb-8 border-t pt-4">
      <div className="flex-grow">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
          Отговор {count}
        </label>
        <input
          className="border border-gray-300 shadow p-3 w-full rounded"
          id="name"
          type="text"
          placeholder="Правя ..."
        />
      </div>
      <div className="grid grid-cols-6 gap-6 mt-4">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="char1"
            className="block text-sm font-medium text-gray-700"
          >
            Характеристики
          </label>
          <select
            id="char1"
            name="char1"
            autoComplete=">Личностови характеристики 1"
            className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <optgroup label="Личностови">
              <option>Личностови характеристики 1</option>
              <option>Личностови характеристики 2</option>
              <option>Личностови характеристики 3</option>
              <option>Личностови характеристики 4</option>
              <option>Личностови характеристики 5</option>
              <option>Личностови характеристики 6</option>
              <option>Личностови характеристики 7</option>
              <option>Личностови характеристики 8</option>
              <option>Личностови характеристики 9</option>
              <option>Личностови характеристики 10</option>
              <option>Личностови характеристики 11</option>
              <option>Личностови характеристики 12</option>
              <option>Личностови характеристики 13</option>
            </optgroup>
            <optgroup label="Лъжа">
              <option>Да</option>
              <option>Не</option>
            </optgroup>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Други характеристики
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <optgroup label="Темперамент">
              <option>Темперамент 1</option>
              <option>Темперамент 2</option>
              <option>Темперамент 3</option>
              <option>Темперамент 4</option>
            </optgroup>
            <optgroup label="Характер">
              <option>Характер 1</option>
              <option>Характер 2</option>
              <option>Характер 3</option>
            </optgroup>
            <optgroup label="Тип функциониране">
              <option>Тип функциониране 1</option>
              <option>Тип функциониране 2</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
}
