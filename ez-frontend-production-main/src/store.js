import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import userReducers, { initialUserstate } from "./reducers/userReducers";
import sellerReducer, { initialSellerState } from "./reducers/sellerReducers";
import ezKaroReducer, { initialEzKaroState } from "./reducers/ezKaroReducers";
import individualProfileReducer, { initialProfileState } from "./reducers/individualProfileReducer";
import sessionReducer, { initialSessionState } from "./reducers/calendarReducers";
import postReducer, { initialPostState } from "./reducers/postReducers";

// -----more reducers to come here----

// combining all reducers
const reducer = combineReducers({
  user: userReducers,
  seller: sellerReducer,
  ezKaro: ezKaroReducer,
  profile: individualProfileReducer,
  session: sessionReducer,
  post: postReducer,
});

// setting initialstate empty object
let initialstate = {
  user: initialUserstate,
  seller: initialSellerState,
  ezKaro: initialEzKaroState,
  profile: initialProfileState,
  session: initialSessionState,
  post: initialPostState,
};

// using redux thunk middleware
const middleware = [thunk];

// finally creating redux store
const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

// exporting the redux store
export default store;