export const initialState = {
  news: [],
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      const isInList = state.news.find(
        (newsItem) => newsItem.id === action.payload.id
      );
      if (isInList) {
        return state;
      } else {
        return {
          news: [...state.news, action.payload],
        };
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      const filteredNews = state.news.filter(
        (newsItem) => newsItem.id !== action.payload
      );

      return {
        news: filteredNews,
      };
    }
    default: {
      return state;
    }
  }
};
