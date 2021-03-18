export default function Answer({
  count,
  handleInputChange,
  handleMultipleSelectChange,
  currentValues,
}) {
  console.log(currentValues);
  return (
    <div className="mb-8 border-t pt-4">
      <div className="flex-grow">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
          Отговор {count}
        </label>
        <input
          className="border border-gray-300 shadow p-3 w-full rounded"
          id="name"
          name={`answer${count}`}
          value={
            currentValues[`answer${count}`]
              ? currentValues[`answer${count}`]
              : ""
          }
          onChange={handleInputChange}
          type="text"
          placeholder={`Текст на отговор ${count}`}
        />
      </div>
      <div className="w-full mt-4">
        <div>
          <label
            htmlFor={`characteristics-${count}`}
            className="block text-sm font-medium text-gray-700"
          >
            Характеристики
          </label>
          <select
            multiple
            value={
              currentValues[`answer-${count}-characteristics`]
                ? currentValues[`answer-${count}-characteristics`]
                : ["0"]
            }
            onChange={handleMultipleSelectChange}
            id={`characteristics-${count}`}
            name={`answer-${count}-characteristics`}
            autoComplete="Избери характеристика"
            className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base h-48"
          >
            <option value="0">Избери характеристика</option>
            <optgroup label="Личностови">
              <option value="1">Шизоидна</option>
              <option value="2">Шизотипна</option>
              <option value="3">Параноидна</option>
              <option value="4">Гранична</option>
              <option value="5">Антисоциална</option>
              <option value="6">Хистрионна</option>
              <option value="7">Нарцистична</option>
              <option value="8">Отбягваща</option>
              <option value="9">Зависима</option>
              <option value="10">Депресивна</option>
              <option value="11">Обсесивно-компулсивна</option>
              <option value="12">Пасивно-агресивна</option>
            </optgroup>
            <optgroup label="Темперамент">
              <option value="13">Пасивно отбягване</option>
              <option value="14">Увеличена активация</option>
              <option value="15">Социална желателност</option>
              <option value="16">Частично подкрепяне</option>
            </optgroup>
            <optgroup label="Характер">
              <option value="17">Самоуправление</option>
              <option value="18">Кооперативност</option>
              <option value="19">Интуитивност</option>
            </optgroup>
            <optgroup label="Тип функциониране">
              <option>Художествен</option>
              <option>Мисловен</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
}
