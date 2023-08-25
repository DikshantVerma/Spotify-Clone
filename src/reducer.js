export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCeq0wtMePx2f_SbmkCPPJu_KXgKScomNaE3N_O4emsxS-c1jLZ60GU0YwCWJQVSTj9RT4fjxkcNeQYFD-xm-0rQb8EKf6w6zn6j6Nz0EBIm2zq7fTk_P6-AYfdU1QFYOMpddBCDUcM6F0b7j8068zynyHYG9ieqiAgGZR0kIHvbRUMZu1CgA_srvkqv5n-YS49l2kj75sdRpEfXOAWng",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        user: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
