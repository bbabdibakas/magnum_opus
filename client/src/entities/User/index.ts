import { getUserData } from "./model/selectors/getUserData/getUserData";
import { userActions, userReducer } from "./model/slice/authFormSlice";
import { User, UserState } from "./model/types/UserState";

export {
    User,
    UserState,
    userActions,
    userReducer,
    getUserData
}