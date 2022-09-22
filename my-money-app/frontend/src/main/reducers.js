import { combineReducers} from "redux";
import dashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/TabReducer";
import BillingCycleReducer from "../billingCycle/BillingCycleReducer";


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    
})


export default rootReducer