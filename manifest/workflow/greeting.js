const { DefineWorkflow, Schema } = require('@slack/bolt');
const { GreetingFunctionDefinition } = require('../function/greeting');

const GreetingWorkflow = DefineWorkflow({
  callback_id: 'greeting_workflow',
  title: 'Send a greeting',
  description: 'Send a greeting to channel',
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ['interactivity'],
  },
});

const inputForm = GreetingWorkflow.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: 'Send a greeting',
    interactivity: GreetingWorkflow.inputs.interactivity,
    submit_label: 'Send greeting',
    fields: {
      elements: [{
        name: 'recipient',
        title: 'Recipient',
        type: Schema.slack.types.user_id,
      }, {
        name: 'channel',
        title: 'Channel to send message to',
        type: Schema.slack.types.channel_id,
        default: GreetingWorkflow.inputs.channel,
      }, {
        name: 'message',
        title: 'Message to recipient',
        type: Schema.types.string,
      }],
      required: ['recipient', 'channel', 'message'],
    },
  },
);

GreetingWorkflow.addStep(
  GreetingFunctionDefinition,
  {
    recipient: inputForm.outputs.fields.recipient,
    channel: inputForm.outputs.fields.channel,
    message: inputForm.outputs.fields.message,
  },
);

module.exports = { GreetingWorkflow };
