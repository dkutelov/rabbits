import Answer from "./answer.component";

export default function QuestionForm() {
  return (
    <div className="bg-blue-200 py-12 px-10 min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
        <h3 className="text-center text-blue-400 font-bold mb-8 text-xl">
          Създай Нов Въпрос
        </h3>
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-600"
            >
              Въпрос
            </label>
            <input
              className="border border-gray-300 shadow p-3 w-full rounded"
              id="name"
              type="text"
              placeholder="Какво правите когато вашия шеф ...?"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="question-type"
              className="block mb-2 font-bold text-gray-600"
            >
              Вид въпрос
            </label>
            <select
              className="border border-gray-300 shadow p-3 w-full rounded"
              id="question-type"
              type="text"
            >
              <option value="1">Един отговор</option>
              <option value="2">Множестени отговори</option>
              <option value="3">Въпрос Лъжа</option>
            </select>
          </div>
          {Array.from({ length: 5 }, () => {}).map((_, i) => (
            <Answer key={i} count={i + 1} />
          ))}
          <button className="block w-full bg-blue-500 text-blue-100 rounded-lg p-4 font-bold">
            Създай
          </button>
        </form>
      </div>
    </div>
  );
}
