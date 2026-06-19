import { Initial } from "../interfaces/interface";

export default function Logan({ logan, phrase }: Initial) {
  return (
    <div className=" text-2xl text-center min-h-22 bg-glass flex items-center justify-center">
      <b>
        <p>{logan}</p>
      </b>
      <i>
        {phrase && <p>{phrase}</p>}
      </i>
    </div>
  );
}
