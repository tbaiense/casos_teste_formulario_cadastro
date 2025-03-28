import { accounts } from './accounts.js';

export default function checkAccount(email, password) {
    for (const a of accounts) {
        if (a.email == email && a.password == password) {
            return true;
        }
    }
    return false;
};