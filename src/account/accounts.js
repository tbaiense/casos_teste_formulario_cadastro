let accounts = [
    {
        id: 1,
        email: "admin@admin.com",
        password: "admin123"
    },
    {
        id: 2,
        email: "usuario@usuario.com",
        password: "usuario123"
    }
];

function appendAccount(newEmail, newPassword) {
    accounts = accounts.concat([{
        id: accounts.length + 1,
        email: newEmail,
        password: newPassword,
    }]);
}

export { accounts, appendAccount };