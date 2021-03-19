import { Component } from "react";

import Image from "next/image";
import Answer from "./answer.component";

const INITIAL_ANSWERS = [
  { id: 1, text: "", characteristics: ["0"] },
  { id: 2, text: "", characteristics: ["0"] },
  { id: 3, text: "", characteristics: ["0"] },
  { id: 4, text: "", characteristics: ["0"] },
];

export default class QuestionForm extends Component {
  state = {
    question: "",
    type: "0",
    relatedQuestionId: "",
    answers: [...INITIAL_ANSWERS],
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAnswerInputChange = (e, i) => {
    const { answers } = this.state;
    const { name } = e.target;
    let value = e.target.value;

    if (name === "characteristics") {
      value = Array.from(
        e.target.selectedOptions,
        (option) => option.value,
      ).filter((x) => x !== "0");
    }

    answers[i][name] = value;
    this.setState({
      answers,
    });
  };

  handleMultipleSelectChange = (e, i) => {
    const { answers } = this.state;
    let value = Array.from(e.target.selectedOptions, (option) => option.value);

    answers[i].characteristics = [...values];
    this.setState({ answers });
  };

  handleRemoveAnswer(i) {
    const answers = [...this.state.answers];
    answers.splice(i, 1);
    this.setState({ answers });
  }

  handleAddAnswer = () => {
    this.setState((prevState) => ({
      answers: [
        ...prevState.answers,
        { id: prevState.answers.length + 1, text: "", characteristics: ["0"] },
      ],
    }));
  };

  render() {
    const { answers } = this.state;
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
            {answers.map((answer, i) => (
              <div key={answer.id}>
                <Answer
                  {...answer}
                  handleAnswerInputChange={this.handleAnswerInputChange}
                />
                <div className="flex justify-end mb-6">
                  {answers.length !== 1 && (
                    <span
                      className="bg-red-500 hover:bg-red-600 py-1 px-4 rounded-full text-white text-xs transition-colors duration-500 mr-2 cursor-pointer"
                      onClick={() => this.handleRemoveAnswer(i)}
                    >
                      Изтрий
                    </span>
                  )}
                  {answers.length - 1 === i && (
                    <span
                      onClick={this.handleAddAnswer}
                      className="bg-blue-600 hover:bg-blue-500 py-1 px-4 rounded-full text-white text-xs transition-colors duration-500 cursor-pointer"
                    >
                      Нов
                    </span>
                  )}
                </div>
              </div>
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
