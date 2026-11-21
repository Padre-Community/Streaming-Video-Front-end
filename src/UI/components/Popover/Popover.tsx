import { useState, createContext, useContext } from "react";


interface PopoverProps {
    children: React.ReactNode;
}

interface PopoverContextProps {
    openPopover: boolean;
    setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>;
}
const PopoverContext = createContext<PopoverContextProps | null>(null);


function usePopover() {
    const context = useContext(PopoverContext);

    if (!context) {
        throw new Error("usePopover só deve ser usado dentro de um componente popover.");
    }
    return context;
}

function popoverTrigger({ children }: PopoverProps) {
    const { setOpenPopover } = usePopover();

    return (
        <button onClick={() => setOpenPopover((previous) => !previous)}>
            {children}
        </button>
    )
}

function Popover({ children }: PopoverProps) {

    const [openPopover, setOpenPopover] = useState<boolean>(false);

    return (
        <PopoverContext.Provider value={{ openPopover, setOpenPopover }}>
            {children}
        </PopoverContext.Provider>
    )
}

export default Popover;