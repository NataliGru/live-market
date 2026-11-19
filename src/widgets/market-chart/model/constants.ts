import type { LucideIcon } from 'lucide-react';
import { LoaderCircle, Pause, Play, RefreshCw } from 'lucide-react';

import type { StreamStatus } from '@/entities/market/model/types';

type StreamButtonState = {
  label: string;
  icon: LucideIcon;
  isLoading?: boolean;
};

export const STREAM_BUTTON_STATES: Record<
  StreamStatus,
  { primary: StreamButtonState; reconnect: StreamButtonState }
> = {
  connecting: {
    primary: { label: 'Connecting…', icon: LoaderCircle, isLoading: true },
    reconnect: { label: 'Reconnect', icon: RefreshCw },
  },
  connected: {
    primary: { label: 'Pause Stream', icon: Pause },
    reconnect: { label: 'Reconnect', icon: RefreshCw },
  },
  reconnecting: {
    primary: { label: 'Connect', icon: Play },
    reconnect: { label: 'Reconnecting…', icon: LoaderCircle, isLoading: true },
  },
  disconnected: {
    primary: { label: 'Connect', icon: Play },
    reconnect: { label: 'Reconnect', icon: RefreshCw },
  },
};
