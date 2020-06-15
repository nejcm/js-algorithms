import {greaterOrEqualThan} from '../../helpers/comparator';
import createHeap, {Heap} from './index';

const maxHeap = <T>(): Heap<T> =>
  createHeap({compareFunction: greaterOrEqualThan});

export default maxHeap;
