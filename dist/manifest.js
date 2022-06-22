var _a = require('@slack/deno-slack-sdk'), DefineFunction = _a.DefineFunction, Manifest = _a.Manifest, Schema = _a.Schema; // will be node module import
var ReverseFunction = DefineFunction({
    callback_id: "reverse",
    title: "Reverse",
    description: "Takes a string and reverses it",
    source_file: "functions/reverse.ts",
    input_parameters: {
        properties: {
            stringToReverse: {
                type: Schema.types.string,
                description: "The string to reverse",
            },
        },
        required: ["stringToReverse"],
    },
    output_parameters: {
        properties: {
            reverseString: {
                type: Schema.types.string,
                description: "The string in reverse",
            },
        },
        required: ["reverseString"],
    },
});
module.exports = Manifest({
    name: "reverse",
    description: "Reverse a string",
    icon: "assets/icon.png",
    functions: [ReverseFunction],
    outgoingDomains: [],
    botScopes: ["commands", "chat:write", "chat:write.public"],
});
