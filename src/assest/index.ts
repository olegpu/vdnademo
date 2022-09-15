import { Sizes } from "../types";

function importAll(r: any) {
  return r.keys().map(r);
}

export const images = {
  [Sizes.S160X600]: importAll(
    // @ts-ignore
    require.context("./160x600", false, /\.(png)$/)
  ),
  [Sizes.S300X250]: importAll(
    // @ts-ignore
    require.context("./300x250", false, /\.(png)$/)
  ),
  [Sizes.S320X480]: importAll(
    // @ts-ignore
    require.context("./320x480", false, /\.(png)$/)
  ),
  [Sizes.S480X320]: importAll(
    // @ts-ignore
    require.context("./480x320", false, /\.(png)$/)
  ),
};

export const barndLogos = importAll(
  // @ts-ignore
  require.context("./logo", false, /\.(png)$/)
);