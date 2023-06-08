import { createAction } from "@reduxjs/toolkit";
import { IMAGE_ACTION, REQUEST } from "../constants";

export const createImageAction = createAction(
  REQUEST(IMAGE_ACTION.CREATE_IMAGE)
);
