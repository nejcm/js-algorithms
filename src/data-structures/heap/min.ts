import {lessOrEqualThan} from '../../helpers/comparator';
import createHeap, {Heap} from './index';

// min heap
const minHeap = <T>(): Heap<T> => createHeap({compareFunction: lessOrEqualThan});

export default minHeap;
