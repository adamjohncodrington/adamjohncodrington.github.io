interface IEventCard {
  title: string;
  subtitle?: string;
  favourite?: boolean;
  body?: string;
  company: Array<IFriend>;
  dateText: string;
  countdownText?: string;
  note?: string;
}
