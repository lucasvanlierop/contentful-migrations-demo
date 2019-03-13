module.exports = function (migration) {
    const contact = migration.editContentType('contact');
    contact.deleteField('emailAddress');
};
