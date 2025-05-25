export interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area: number;
  languages?: { [key: string]: string };
}
