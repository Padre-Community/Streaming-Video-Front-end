import { useState } from "react";

const LIMITE_DESCRICAO = 180;

export default function useReproducao(descricao: string) {
  const [isExpandida, setIsExpandida] = useState<boolean>(false);

  const handleExpandir = () => {
    setIsExpandida(!isExpandida);
  };

  const precisaTruncar = descricao.length > LIMITE_DESCRICAO;

  const descricaoVisivel =
    precisaTruncar && !isExpandida
      ? `${descricao.slice(0, LIMITE_DESCRICAO).trimEnd()}...`
      : descricao;

  return { isExpandida, handleExpandir, precisaTruncar, descricaoVisivel };
}
