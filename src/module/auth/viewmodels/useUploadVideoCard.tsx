import { useState } from "react";

export default function useUploadVideoCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleOpen };
}
