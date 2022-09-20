import { useEffect, useRef } from "react";
import ZoomModel from "./ZoomModel";

const ModalModel: React.FC<{
  onClose: () => void;
  show: boolean;
  modelName: string;
}> = ({ onClose, show, modelName }) => {
  const modalBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalBox.current?.contains(e.target as Node)) return;

      onClose();
    };

    setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 100);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [modalBox]);

  return (
    <div
      className={`${
        show ? "visible" : "hidden"
      } " fixed top-0 left-0  w-screen h-screen z-50 flex justify-center items-center backdrop-blur bg-base-100"`}
    >
      <div ref={modalBox} className="h-3/4 w-3/4 m-auto border">
        <ZoomModel modelName={modelName} />
      </div>
    </div>
  );
};

export default ModalModel;
