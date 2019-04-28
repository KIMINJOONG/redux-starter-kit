import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, ReduxThunk));

export default store;
