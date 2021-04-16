import { createStore, combineReducers } from "redux";
import TodoReducer from "./component/todos/reducers";
import CashflowSummaryReducer from "./reducer/CashflowSummary";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import ProductReducer from "./reducer/ProductReducer";
import MaterialReducer from "./reducer/MaterialReducer";
import SampleColorReducer from "./reducer/configuration/SampleColorReducer";
import SampleTypeReducer from "./reducer/configuration/SampleTypeReducer";
import TextileColorReducer from "./reducer/configuration/TextileColorReducer";
import TextileTypeReducer from "./reducer/configuration/TextileTypeReducer";
import SamplePricingReducer from "./reducer/configuration/SamplePricingReducer";
import TextilePricingReducer from "./reducer/configuration/TextilePricingReducer";

const reducers = {
  todos: TodoReducer,
  cashflowSummary: CashflowSummaryReducer,
  productComponent: ProductReducer,
  materialComponent: MaterialReducer,
  sampleColorComponent: SampleColorReducer,
  sampleTypeComponent: SampleTypeReducer,
  samplePricingComponent: SamplePricingReducer,
  textileColorComponent: TextileColorReducer,
  textileTypeComponent: TextileTypeReducer,
  textilePricingComponent: TextilePricingReducer,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
