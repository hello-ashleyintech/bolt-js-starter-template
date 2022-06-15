const { DefineFunction, Manifest, Schema } = require('@slack/deno-slack-sdk');

const ReverseFunction = DefineFunction({
  callback_id: 'reverse',
  title: 'Reverse',
  description: 'JSTakes a string and reverses it',
  source_file: 'JSfunctions/reverse.ts',
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: 'JSThe string to reverse',
      },
      channel_id: {
        type: 'JSslack#/types/channel_id',
        description: 'channel ID',
      },
    },
    required: ['stringToReverse'],
  },
  output_parameters: {
    properties: {
      reverseString: {
        type: Schema.types.string,
        description: 'The string in reverse',
      },
    },
    required: ['reverseString'],
  },
});

const manifest = Manifest({
  name: 'reverse',
  description: 'JSReverse a string',
  icon: 'JSassets/icon.png',
  functions: [ReverseFunction],
  outgoingDomains: [],
  botScopes: ['JScommands', 'JSchat:write', 'JSchat:write.public'],
});

module.exports = manifest;
