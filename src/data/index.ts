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

export const getTimeUnitColor = (t: string) => {
  if (t === 'MIN') return colors[0];
  if (t === 'HOUR') return colors[1];
  if (t === 'DAY') return colors[2];
  if (t === 'MONTH') return colors[3];
  if (t === 'YEAR') return colors[4];
};

export const getPriorityColor = (p: string) => {
  if (p === 'LOW') return colors[0];
  if (p === 'MID') return colors[1];
  if (p === 'HIGH') return colors[2];
};

export const getStateColor = (s: string) => {
  if (s === 'TO DO') return colors[0];
  if (s === 'DOING') return colors[1];
  if (s === 'DONE') return colors[2];
};
