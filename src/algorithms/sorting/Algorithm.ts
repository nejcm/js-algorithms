export interface Options<T> {
  visitingCallback?: (val?: T) => void;
  compareFunction?: (val1: T, val2: T) => boolean;
  [key: string]: unknown;
}

export type Values<T> = T[];

export interface Result {
  result: unknown;
  time?: number;
}

export interface AlgorithmProps<T> {
  run: (values: Values<T>) => Result;
}

export interface Algorithm<T> extends AlgorithmProps<T> {
  timedRun: (values: Values<T>) => Result;
}

export interface AlgorithmConstructor<T> {
  options?: Options<T>;
}

const Algo = <T>(props: AlgorithmProps<T>): Algorithm<T> => {
  const base: Omit<Algorithm<T>, 'run'> = {
    timedRun: (values: Values<T>): Result => {
      const t0 = performance.now();
      const response = props.run(values);
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
