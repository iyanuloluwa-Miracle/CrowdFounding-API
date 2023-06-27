// api/models/Campaign.js

module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },

    category: {
      type: 'string',
      required: true,
    },
    goal: {
      type: 'number',
      required: true,
    },
    // Add any other attributes or associations needed for your Campaign model
  },
};
