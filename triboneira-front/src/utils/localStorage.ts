import { StorageValueType } from '../types';

export const KEY_LOCAL_STORAGE = 'loggedUser';

function createLocalStorage(key: string, value: StorageValueType) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function createMultipleLocalStorage(obj: Record<string, StorageValueType>) {
  Object.entries(obj).forEach(([key, value]) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
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
  createMultipleLocalStorage,
  getLocalStorage,
  checkLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
};
