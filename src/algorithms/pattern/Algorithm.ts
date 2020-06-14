export interface Options {
  visitingCallback?: (val: string) => void;
  compareFunction?: (val1: string, val2: string) => boolean;
  [key: string]: unknown;
}

export interface Result {
  result: unknown;
  time?: number;
}

export interface AlgorithmProps {
  run: (value: string, seek: string) => Result;
}

export interface Algorithm extends AlgorithmProps {
  timedRun: (value: string, seek: string) => Result;
}

export interface AlgorithmConstructor {
  options?: Options;
}

const Algo = (props: AlgorithmProps): Algorithm => {
  const base: Omit<Algorithm, 'run'> = {
    timedRun: (value: string, seek: string): Result => {
      const t0 = performance.now();
      const response = props.run(value, seek);
      const t1 = performance.now();
      return {
        ...response,
        time: t1 - t0,
      };
    },
  };

  return {...base, ...props};
};

export default Algo;
