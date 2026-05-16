interface msg {
  mssg: string;
  mssgX?: string;
}

export function Message({ mssg, mssgX }: msg) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <b className="border border-dashed p-4">{mssg}</b>
      <p className="w-150 text-center mt-2">{mssgX}</p>
    </div>
  );
}
