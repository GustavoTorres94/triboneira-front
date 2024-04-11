import { StorageValueType } from '../types';

function createLocalStorage(key: string, value: StorageValueType) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) as string);
}

function checkLocalStorage() {
  return localStorage.length;
}

function removeLocalStorage(key: string) {
  return localStorage.removeItem(key);
}

function clearLocalStorage() {
  return localStorage.clear();
}

export {
  createLocalStorage,
  getLocalStorage,
  checkLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
};
