import Flags from "country-flag-icons/react/3x2";

export type Countrie = {
    code: keyof typeof Flags 
    name: string;
    iso3: string;
    otpInAppEnabled: boolean;
    dialCode: string;
    defaultTimezone: string;
};