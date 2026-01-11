export interface TourRequest {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  partySize: number;
  specialRequests: string;
}

export interface TourResponse {
  confirmationId: string;
  conciergeMessage: string;
  estimatedDuration: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}