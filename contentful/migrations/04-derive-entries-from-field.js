module.exports = function (migration) {
    const sha1 = require('sha1');

    const contact = migration.editContentType('contact');
    migration.deriveLinkedEntries({
        contentType: 'contact',
        derivedContentType: 'emailAddress',
        from: ['emailAddress'],
        toReferenceField: 'tmpEmailAddressRef',
        derivedFields: [
            'address',
            'title'
        ],
        identityKey: async (fromFields) => {
            if (typeof fromFields.emailAddress === 'undefined') {
                return;
            }

            return sha1(fromFields.emailAddress['en-US']);
        },
        shouldPublish: true,
        deriveEntryForLocale: async (inputFields, locale) => {
            if (typeof inputFields.emailAddress === 'undefined') {
                return;
            }

            if (RegExp(/@/).test(inputFields.emailAddress[locale]) === false) {
                return;
            }

            return {
                'address': inputFields.emailAddress[locale],
                'title': '',
            };
        }
    });
};
