import './lz4.js';
import encode from './encode';
import decode from './decode';
import registry from './registry';
const { register, types } = registry;

export default {
  encode,
  decode,
  types,
  register,
};
