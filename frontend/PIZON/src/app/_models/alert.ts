export interface Alert {
  id: string; // Unique ID for each alert
  message: string; // The content of the alert
  severity: 'info' | 'warning' | 'error' | 'success'; // Severity of the alert
  timestamp: Date; // When the alert was triggered
}
