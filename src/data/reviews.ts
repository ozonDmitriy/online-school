export interface Review {
  id: string;
  name: string;
  text: string;
}

export const reviews: Review[] = [
  { id: "1", name: "Андрей", text: "Сдала ЕГЭ по математике на 82 балла" },
  { id: "2", name: "Миша", text: "ОГЭ на 4 за 2 месяца" },
  { id: "3", name: "Егор", text: "Объясняют реально уебки" },
  { id: "4", name: "Дима", text: "Физика с 3 до 5" },
  { id: "5", name: "Маша 9 класс", text: "Сосала как могла" },
  { id: "6", name: "Олег 67", text: "Крута как" },
  { id: "7", name: "Олег 52", text: "Помогли с мемами" },
  { id: "7", name: "Кирилл ", text: "Говно курил" },
];
