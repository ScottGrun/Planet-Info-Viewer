  export interface Overview {
    content: string;
    source: string;
  }

  export interface Structure {
    content: string;
    source: string;
  }

  export interface Surface {
    content: string;
    source: string;
  }

  export interface Images {
    overview: string;
    structure: string;
  }

  export declare interface PlanetType {
    name: string;
    overview: Overview;
    structure: Structure;
    surface: Surface;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: Images;
    model: string;
    poster: string;
    iosModel: string;
    sizes: number[];
  }

