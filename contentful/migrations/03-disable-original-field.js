module.exports = function (migration) {
    const contact = migration.editContentType('contact');
    contact.editField('emailAddress').disabled(true);
};
