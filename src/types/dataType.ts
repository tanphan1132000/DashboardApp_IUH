export type Feed = {
  channel: Channel;
  feeds: Feeds[];
};

export type Channel = {
  created_at: Date;
  description: string;
  field1: string;
  field2: string;
  field3: string;
  id: number;
  last_entry_id: null;
  latitude: string;
  longitude: string;
  name: string;
  updated_at: Date;
};

export type Feeds = {
  created_at: Date;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
};
