import {lessOrEqualThan} from '../../helpers/comparator';
import createHeap, {Heap} from './index';

const minHeap = <T>(): Heap<T> =>
  createHeap({compareFunction: lessOrEqualThan});

export default minHeap;
