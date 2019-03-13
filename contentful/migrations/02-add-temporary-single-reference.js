module.exports = function (migration) {
    const contact = migration.editContentType('contact');
    contact.createField('tmpEmailAddressRef')
        .name('Tmp email adress reference')
        .type('Link')
        .linkType('Entry')
        .disabled(true)
        .validations([
            {
                'linkContentType': [
                    'emailAddress'
                ]
            }
        ]);

    contact.moveField('tmpEmailAddressRef').afterField('emailAddress');
};
