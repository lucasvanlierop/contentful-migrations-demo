module.exports = function (migration) {
    const emailAddress = migration.createContentType('emailAddress').name('Email address');
    emailAddress.displayField('address');
    emailAddress.createField('address').type('Symbol').name('Adres').validations([{ unique: true }]);
    emailAddress.createField('title').type('Symbol').name('Titel').validations([{ unique: true }]);
};
