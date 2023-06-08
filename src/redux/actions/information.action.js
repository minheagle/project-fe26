import { createAction } from "@reduxjs/toolkit";
import { INFORMATION_ACTION, REQUEST } from "../constants";

export const createInformationAction = createAction(
  REQUEST(INFORMATION_ACTION.CREATE_INFORMATION)
);
