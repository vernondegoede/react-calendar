import './../mocks/localStorage';
import { loadState, saveState } from './../../src/utils/persistence';

const state = {
  firstname: 'Vernon',
  lastname: 'de Goede'
};

describe ('persisting to localStorage', () => {
  it('should save current state', () => {
    expect(() => {
      saveState(state);
    }).not.toThrow();
  });

  it('should retrieve state correctly from localStorage', () => {
    saveState(state);
    expect(loadState()).toEqual(JSON.parse(window.localStorage.getItem('state')));
    expect(loadState()).toEqual(state);
  });

  it('should be able to reset state in localStorage', () => {
    saveState(state);
    localStorage.clear();
    expect(loadState()).toBeUndefined();
  });
});
