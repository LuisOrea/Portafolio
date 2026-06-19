interface props {
    title: string
}

export default function Title({title}: props) {
  return (
    <div>
      <span className="w-60 h-36  rounded-4xl p-2 bg-glass text-[14px]">
        {title}
      </span>
    </div>
  );
}
