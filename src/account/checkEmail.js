import { accounts } from './accounts.js';

export default function checkEmail(email) {
    for (const e of accounts) {
        if (e.email == email) {
            return true;
        }
    }

    return false;
};