module.exports.run = (event,context,callback) => {
    event.response = {
        "claimsOverrideDetails": {
            "claimsToAddOrOverride": {
                "attribute_key2": "attribute_value2",
                "_id": "6319715b1bd0bf3a8815042a"
            },
            "claimsToSuppress": ["email"]
        }
    };

    callback(null, event);
}