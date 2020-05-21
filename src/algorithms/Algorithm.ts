export interface Options<T> {
  visitingCallback?: (val: T) => void;
  //compareCallback?: (index1: number, index2: number, func: Function) => void;
  //swapCallback?: (index1: number, index2: number) => void;
  compareFunction?: (val1: T, val2: T) => boolean;
}

export type Values<T> = T[];

export interface Result<T> {
  result: Values<T>;
  time?: number;
}

export interface AlgorithmProps<T> {
  run: (values: Values<T>, options?: Options<T>) => Result<T>;
}

export interface Algorithm<T> extends AlgorithmProps<T> {
  timedRun: (values: Values<T>, options?: Options<T>) => Result<T>;
}

export interface AlgorithmConstructor<T> {
  options?: Options<T>;
}

const Algo = <T>(props: AlgorithmProps<T>): Algorithm<T> => {
  const base: Omit<Algorithm<T>, 'run'> = {
    timedRun: (values: Values<T>): Result<T> => {
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
