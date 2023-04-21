export type Performance = {
  playID: string;
  audience: number;
};

export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Play = {
  name: string;
  type: string;
};

export type Plays = {
  [key: string]: Play;
};

export type EnrichedPerformance = {
  play: Play;
  amount: number;
  volumsCredits: number;
} & Performance;

export type StatementData = {
  performances: EnrichedPerformance[];
  totalAmount: number;
  totalVolumeCredits: number;
  play: Play;
} & Pick<Invoice, 'customer'>;
