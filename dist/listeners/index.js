var actions = require('./actions');
var commands = require('./commands');
var events = require('./events');
var functions = require('./functions');
var messages = require('./messages');
var shortcuts = require('./shortcuts');
var views = require('./views');
module.exports.registerListeners = function (app) {
    actions.register(app);
    commands.register(app);
    events.register(app);
    functions.register(app);
    messages.register(app);
    shortcuts.register(app);
    views.register(app);
};
