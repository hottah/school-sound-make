import type { ReactNode } from "react";

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Lightbox({ open, onClose, children }: LightboxProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-[30px]"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[95vw] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-[20px] top-[20px] z-10 text-[32px] cursor-pointer"
          aria-label="閉じる"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
