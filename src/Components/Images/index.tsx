import { images } from "../../assest";
import { Sizes } from "../../types";

export const Images = ({ size }: { size: Sizes }) =>
  images[size].map((i: string) => <img src={i} alt={`imgz ${i}`} key={i} />);
