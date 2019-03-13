module.exports = function (migration) {
    const contact = migration.editContentType('contact');
    contact.editField('emailAddresses')
        .disabled(false);
};
