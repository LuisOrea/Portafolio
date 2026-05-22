import { Initial } from "../interfaces/interface";

export default function Logan({ logan, phrase }: Initial) {
  return (
    <div className="mt-10 text-2xl text-center">
      <b>
        <p>{logan}</p>
      </b>
      <i>
        {phrase && <p>{phrase}</p>}
      </i>
    </div>
  );
}
