import { userBaseSelect } from "./modules/user.selectors";

export const selectors = {
  user: {
    base: userBaseSelect
  }
} as const;
