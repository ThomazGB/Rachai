import type { SignInBody, SignUpBody } from "@classes/APIManager/base/types/RequestBody.types";
import { APIManager } from "@classes/APIManager/base";
import { apiErrors } from "@constants/apiErrors";

export class UserManager extends APIManager {
  public static async signUp(signUpBody: SignUpBody): Promise<void | { error?: string; message?: string; }> {
    const response = await APIManager.request(
      "/user/signup", JSON.stringify(signUpBody),
      { "Content-Type": "application/json" },
      { useServer: false }
    );

    const { error, message } = await response.json() as { error?: string; message?: string; };
    if (apiErrors.includes(error!)) return { error, message };
  }

  public static async signIn(signInBody: SignInBody): Promise<void | { error?: string; message?: string; }> {
    const response = await APIManager.request(
      "/user/signin", JSON.stringify(signInBody),
      { "Content-Type": "application/json" }, { useServer: false }
    );

    const { error, message } = await response.json() as { error?: string; message?: string; };
    if (apiErrors.includes(error!)) return { error, message };
  }
}