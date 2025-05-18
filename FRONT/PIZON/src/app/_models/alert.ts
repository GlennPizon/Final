export type AlertType = 'success' | 'error' | 'info' | 'warning';

export class Alert {
  constructor(
    public id: string,
    public type: AlertType,
    public message: string,
    public autoClose = true,
    public keepAfterRouteChange = false,
    public fade = false
  ) {}
}
