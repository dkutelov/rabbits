import { Component } from "react";
import Answer from "./answer.component";

export default class QuestionForm extends Component {
  state = {
    question: "",
    type: "0",
    relatedQuestionId: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleMultipleSelectChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div className="bg-blue-200 py-12 px-4 md:px-10 min-h-screen">
        <div className="bg-white px-4 md:px-10 py-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <h3 className="text-center text-blue-400 font-bold mb-8 text-xl">
            Създай Нов Въпрос
          </h3>
          <form>
            <div className="mb-5">
              <label
                htmlFor="question"
                className="block mb-2 font-bold text-gray-600"
              >
                Въпрос
              </label>
              <input
                className="border border-gray-300 shadow p-3 w-full rounded"
                id="question"
                name="question"
                value={this.state.question}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Текст на въпроса"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="question-type"
                className="block mb-2 font-bold text-gray-600"
              >
                Тип въпрос
              </label>
              <select
                className="border border-gray-300 shadow p-3 w-full rounded"
                id="question-type"
                name="type"
                value={this.state.type}
                onChange={this.handleInputChange}
                type="text"
              >
                <option value="0">Избор тип въпрос</option>
                <option value="1">Един отговор</option>
                <option value="2">Множестени отговори</option>
                <option value="3">Въпрос Лъжа</option>
              </select>
            </div>
            {this.state.type === "3" && (
              <div className="mb-8">
                <label
                  htmlFor="related-question"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Свързан въпрос
                </label>
                <select
                  className="border border-gray-300 shadow p-3 w-full rounded"
                  id="related-question"
                  name="relatedQuestionId"
                  value={this.state.relatedQuestion}
                  onChange={this.handleInputChange}
                  type="text"
                >
                  <option value="0">Избор свързан въпрос</option>
                  <option value="1">Въпрос 1</option>
                  <option value="2">Въпрос 2</option>
                  <option value="3">Въпрос 3</option>
                  <option value="4">Въпрос 4</option>
                  <option value="5">Въпрос 5</option>
                </select>
              </div>
            )}
            {Array.from({ length: 5 }, () => {}).map((_, i) => (
              <Answer
                key={i}
                count={i + 1}
                handleInputChange={this.handleInputChange}
                handleMultipleSelectChange={this.handleMultipleSelectChange}
                currentValues={this.state}
              />
            ))}
            <button className="block w-full bg-blue-500 text-blue-100 rounded-lg p-4 font-bold">
              Създай
            </button>
          </form>
        </div>
      </div>
    );
  }
}
