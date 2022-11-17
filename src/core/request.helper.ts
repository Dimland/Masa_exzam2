import { NON_EXISTENT_ID } from "../constants";
import { systemError } from "../entities";
import { AppError } from "../enums";
import ErrorService from "./error.service";

export class RequestHelper {
  public static ParseNumericInput(input: string): number {
    let result: number = NON_EXISTENT_ID;

    if (input !== null && input !== undefined) {
      result = parseInt(input);
    }

    return result;
  }
}
