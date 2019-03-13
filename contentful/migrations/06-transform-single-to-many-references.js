module.exports = (migration) => {
    migration.transformEntries({
        contentType: 'contact',
        from: ['tmpEmailAddressRef'],
        to: ['emailAddresses'],
        transformEntryForLocale: (fromFields, currentLocale) => {
            if (!fromFields.tmpEmailAddressRef) {
                return
            }
            return {emailAddresses:[fromFields.tmpEmailAddressRef[currentLocale]]}
        }
    })

}
