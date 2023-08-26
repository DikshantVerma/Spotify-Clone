export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   token:
  //     "BQCiEo4hGsJIlIr1sPmpHcJ5INE1IALBSYEQoT_h9qRjGrgWgJdpG7TtkTa6Q8bKFeOa6pbSwASznLlgRNeeV8FV6YrdqJjQyK1SBsWi08Sf_e5cjZVetvgGPc1skM8d4Jgr0pYdSFVIGMas_J9b7IeSohvTIXzQE_EpSodROBE1v7HHexMqqG9eA3F9yVtvQBWghcnutWTdJulwE77rXg",
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
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
