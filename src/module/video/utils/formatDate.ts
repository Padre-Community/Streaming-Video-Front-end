export function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(date))
    .replace(".", "");
}
