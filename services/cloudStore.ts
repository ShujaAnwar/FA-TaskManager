
import { AllCampusData, User } from '../types';
import { INITIAL_DATA, USERS } from '../constants';

// This object simulates a persistent, in-memory cloud database.
// It's a singleton that will be shared across all modules in the app.
const cloudDataStore: { data: AllCampusData; users: User[] } = {
    data: JSON.parse(JSON.stringify(INITIAL_DATA)),
    users: JSON.parse(JSON.stringify(USERS)),
};

export const cloudStore = {
    getData: (): AllCampusData => {
        // Return a deep copy to prevent direct mutation, mimicking an API call
        return JSON.parse(JSON.stringify(cloudDataStore.data));
    },
    setData: (newData: AllCampusData) => {
        cloudDataStore.data = JSON.parse(JSON.stringify(newData));
    },
    getUsers: (): User[] => {
        // Return a deep copy
        return JSON.parse(JSON.stringify(cloudDataStore.users));
    },
    setUsers: (newUsers: User[]) => {
        cloudDataStore.users = JSON.parse(JSON.stringify(newUsers));
    },
    reset: () => {
        cloudDataStore.data = JSON.parse(JSON.stringify(INITIAL_DATA));
        cloudDataStore.users = JSON.parse(JSON.stringify(USERS));
    }
};
