import { welcomeTemplate, WelcomeTemplateParams } from "./pages/welcome";
import { otpTemplet, OtpTempletParams } from "./pages/otp";
import {
  ResetPasswordParams,
  resetPasswordTemplet,
} from "./pages/resetPassword";

// Define a type for available template names
export type TemplateNames = "welcome" | "otp" | "resetPassword"; // Add more template names as needed

export type TemplateParamsMap = {
  welcome: WelcomeTemplateParams;
  otp: OtpTempletParams;
  resetPassword: ResetPasswordParams;
};

export const templates: {
  [key in TemplateNames]: (data: TemplateParamsMap[key]) => string;
} = {
  welcome: welcomeTemplate,
  otp: otpTemplet,
  resetPassword: resetPasswordTemplet,
};

export interface TemplateFunction {
  (data: any): string;
}
