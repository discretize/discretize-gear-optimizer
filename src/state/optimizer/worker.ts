import { calculate } from './optimizer';
import type { RootState } from '../store';

let resultGenerator: ReturnType<typeof calculate>;

export const setup = (reduxState: RootState) => {
  resultGenerator = calculate(reduxState);
};
export const next = () => resultGenerator.next();
