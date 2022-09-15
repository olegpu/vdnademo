export enum Sizes {
  S160X600 = "160x600",
  S300X250 = "300x250",
  S320X480 = "320x480",
  S480X320 = "480x320",
}

export type Value = {
  size: Sizes,
  width: number,
  height: number,
}

export type OptionsParams = {
  title: string,
  optionsNum: number,
  continueButtonVisability: string,
  wrapperSize: Sizes,
}

export type CSSProp = {
  default: string,
  title: any,
  options: any,
  option: any,
  button: any,
  privacyPolicy: any,
  brandLogo: any,
}

export type CSSProps = {
  [name: string]: CSSProp
}