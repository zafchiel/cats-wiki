import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-black p-4 text-white rounded-t-3xl flex justify-between">
      <Logo type="white" />

      <div>@zafchiel &#169;{new Date().getFullYear()}</div>
    </footer>
  );
}
