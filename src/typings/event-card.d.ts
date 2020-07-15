interface IEventCard {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  favourite?: boolean;
  company: Array<IFriend>;
  countdownText?: string;
  note?: string;
  photos?: Array<IJpgSrc>;
}
