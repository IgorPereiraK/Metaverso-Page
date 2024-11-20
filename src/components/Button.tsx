type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-btn-bg py-2 px-5 border border-border rounded skew-x-[-20deg]">
      <span className="block text-light skew-x-[20deg]">{text}</span>
    </button>
  );
}
