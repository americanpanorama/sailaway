export type Dimensions = {
  width: number;
  height: number;
  header: {
    height: number;
  };
  footer: {
    height: number;
  };
  headerTitle: {
    height: number;
  };
  footerTitle: {
    height: number;
  };
  transcription: {
    height: number;
    width: number;
  };
  media: 'phone' | 'tablet-portrait' | 'desktop';
}

export type Text = {
  year?: number;
  month?: number;
  day?: number;
  title: string;
  images: string[];
}   

export type Item = Text & {
  id: string;
  bookmarks?: Text[];
}

export type DocType = 'Gem of Beverly' | 'Sonora' | 'Vernon' | 'Unknown Vessel';

export type Meeting = {
  year: number;
  month: number;
  day?: number;
  page: number;
}

export type URLParamsDocument = {
  id: DocType;
  page: string;
}
