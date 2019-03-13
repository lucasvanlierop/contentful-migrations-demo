module.exports = function (migration) {
    const contact = migration.editContentType('contact');
    contact.createField('emailAddresses')
        .name('Email adressen')
        .type('Array')
        .disabled(true)
        .items({
            type: 'Link',
            linkType: 'Entry',
            validations: [
                {
                    'linkContentType': [
                        'emailAddress'
                    ]
                }
            ]
        });

    contact.moveField('emailAddresses').afterField('tmpEmailAddressRef');
};
