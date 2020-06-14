import {Algorithm, Options} from './Algorithm';

const Tester = {
  testWrong: (
    algorithm: (opts?: Options) => Algorithm,
    options?: Options,
  ): void => {
    const alg = algorithm(options);
    // This is only to force typescript to accept the parameter to test it
    expect(alg.run((null as unknown) as string, '').result).toEqual(-1);
    expect(alg.run((undefined as unknown) as string, '0').result).toEqual(-1);
    expect(alg.run('Test', (undefined as unknown) as string).result).toEqual(
      -1,
    );
  },
  testStrings: (
    algorithm: (opts?: Options) => Algorithm,
    options?: Options,
  ): void => {
    const alg = algorithm(options);

    expect(alg.run('', '').result).toEqual(-1);
    expect(alg.run('a', '').result).toEqual(-1);
    expect(alg.run('a', 'aa').result).toEqual(-1);
    expect(alg.run('a', 'a').result).toEqual(0);
    expect(alg.run('ab', 'b').result).toEqual(1);
    expect(alg.run('abcdedcba', 'cde').result).toEqual(2);
    expect(alg.run('abcdedcba', 'cba').result).toEqual(6);
    expect(alg.run('abcdedcba', 'cbe').result).toEqual(-1);
    expect(alg.run('adefxaaabe dgxxddacdaa', 'dgxx').result).toEqual(11);
    expect(alg.run('adefxaaabe dgxxddacdaa', 'aa').result).toEqual(5);
    expect(alg.run('adefxaaabe dgxxddacdaa', 'xxx').result).toEqual(-1);
    expect(alg.run('adefxaaabe dgxxddacdaa', 'aabe dg').result).toEqual(6);
    expect(alg.run('abcaddaabcdac', 'abcd').result).toEqual(7);
    expect(alg.run("^ !/'#'pp", " !/'#'pp").result).toBe(1);
    const str = 'This is a short text for testing pattern algorithms!';
    expect(alg.run(str, 'for').result).toBe(21);
    expect(alg.run(str, 'hello').result).toBe(-1);
    const upperCaseStr = 'AABFFFDDDCFGGGGAAAAAAHIIIBZ';
    expect(alg.run(upperCaseStr, 'AAB').result).toBe(0);
    expect(alg.run(upperCaseStr, 'XZ').result).toBe(-1);
    expect(alg.run(upperCaseStr, 'CFGGGGAAAAAA').result).toBe(9);
  },
  testLongText: (
    algorithm: (opts?: Options) => Algorithm,
    options?: Options,
  ): void => {
    const alg = algorithm(options);
    const longText =
      'Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. ' +
      'But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous. ' +
      'His merit end means widow songs linen known. Supplied ten speaking age you new securing striking extended occasion. ' +
      'Sang put paid away joy into six her. Folly words widow one downs few age every seven. If miss part by fact he park just shew. ' +
      'Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. ' +
      'Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. ' +
      'Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least.';
    expect(alg.run(longText, 'Not found').result).toEqual(-1);
    expect(alg.run(longText, 'WIDOW').result).toEqual(-1);
    expect(alg.run(longText, 'widow').result).toEqual(258);
    expect(alg.run(longText, 'Attended').result).toEqual(0);
    expect(alg.run(longText, 'agreeable law').result).toEqual(635);
    expect(alg.run(longText, '. Up').result).toEqual(783);
    expect(alg.run(longText, '. up').result).toEqual(-1);
  },
  testTiming: (algorithm: () => Algorithm): void => {
    const alg = algorithm();
    expect(
      alg.timedRun('Test text for timing run.', 'Test').time,
    ).toBeGreaterThan(0);
  },
};

export default Tester;
