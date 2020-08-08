import {greaterOrEqualThan} from '../../helpers/comparator';
import createHeap, {Heap} from './index';

// max heap
const maxHeap = <T>(): Heap<T> => createHeap({compareFunction: greaterOrEqualThan});

export default maxHeap;
