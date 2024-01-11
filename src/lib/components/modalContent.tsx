import Search from "./search";

type Props = {
  onClose: () => void;
};

export default function ModalContent({ onClose }: Props) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed rounded-xl bg-[#e3e1dc] top-1/2 left-1/2 p-4 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md">
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-1">
            X
          </button>
        </div>
        <Search isOnModal={true} />
      </div>
    </>
  );
}
