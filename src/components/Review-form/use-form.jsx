import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  // дефолтное состояние полей формы
  name: "",
  text: "",
  rating: 1,
};

// функция reducer будет менять состояние нашей формы. В ней будет находиться вся логика работы с нашим состоянием. Фунция принимает: первый параметр - state - наше текущее состояние, второй параметр - какой-то action (объект), который как правило, хранит type и payload

const SET_NAME_ACTION_TYPE = "setName";
const SET_TEXT_ACTION_TYPE = "setText";
const SET_RATING_ACTION_TYPE = "setRating";
const SET_CLEAR_ACTION_TYPE = "setClear";

export const reducer = (state, action) => {
  const { type, payload } = action; // в type мы определяем перечень типов наших действий и делаем по ним switch. По определенному типу action, мы должны вернуть новое состояние. Эти action'ы мы определяем сами

  switch (type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...state,
        name: payload, // наш потребитель в payload передаст новое значение
      };

    case SET_TEXT_ACTION_TYPE:
      // "из useReducer так же необходимо возвращать новый объект, по аналогии с useState. Нужно вернуть новую ссылку. Поэтому, таким способом мы создаем новый объект. Возвращаем все текущие поля, кроме текста, т.к. актуальный адрес у нас лежит в payload"
      return {
        ...state,
        text: payload,
      };

    case SET_RATING_ACTION_TYPE:
      return {
        ...state,
        rating: payload,
      };

    case SET_CLEAR_ACTION_TYPE:
      return DEFAULT_FORM_VALUE;

    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE); // первый параметр - наше текущее состояние, второй параметр - функция dispatch
  // в функцию useReducer мы передаем: первый параметр - функция reducer, второй параметр - дефолтное значение

  // у нас есть форма (form). Это, условно, наше текущее или начальное состояние, которое содержит такие поля. И мы можем получить все эти значения
  const { name, text, rating } = form;

  // мы можем позаботиться о пользователе и создать колбэки. setName - колбэк, который принимает какое-то value и возвращает dispatch
  const setName = (value) => {
    dispatch({ type: SET_NAME_ACTION_TYPE, payload: value }); // при setName мы отправляем action type: SET_NAME_ACTION_TYPE и payload - то, что нам передали в value
  };

  const setText = (value) => {
    dispatch({ type: SET_TEXT_ACTION_TYPE, payload: value });
  };

  const setRating = (value) => {
    dispatch({ type: SET_RATING_ACTION_TYPE, payload: value });
  };

  const setClear = () => {
    dispatch({ type: SET_CLEAR_ACTION_TYPE });
  };

  // и далее потребителю мы можем вернуть все наши поля. тогда потребитель не будет думать ни о каких диспатчах, о том, как называются все эти action'ы, которые мы создали, для него это не важно.
  return {
    name,
    text,
    rating,
    setName,
    setText,
    setRating,
    setClear,
  };
};
