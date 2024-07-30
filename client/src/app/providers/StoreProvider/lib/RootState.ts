import { UserState } from "entities/User";
import { AuthFormState } from "features/authByUsername";

export interface RootState {
    user: UserState
    authForm: AuthFormState
}
