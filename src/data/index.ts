const ya = '#FCBC04';
const bl = '#0F76CA';
const rd = '#e26970';
const pur = '#6B51F3';
const gr = '#20AB8A';
export const colors = [ya, bl, rd, pur, gr];
export const timeUnits = ['MIN', 'HOUR', 'DAY', 'MONTH', 'YEAR'];
export const priorities = ['LOW', 'MID', 'HIGH'];
export const states = ['TO DO', 'DOING', 'DONE'];
export type Task = {
  id: string;
  name: string;
  time: string;
  timeUnit: string;
  priority: string;
  state: string;
};
