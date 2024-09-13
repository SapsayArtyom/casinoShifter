declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export = SVG;
}

type DetectPortCallback = (err: Error, _port: number) => void;

interface PortConfig {
    port?: number;
    hostname?: string | undefined;
    callback?: DetectPortCallback | undefined;
}

interface DetectPort {
    (port: number | PortConfig | undefined, callback: DetectPortCallback): void;
    (port?: number | PortConfig): Promise<number>;
}
declare const detectPort: DetectPort;
// export = detectPort;

