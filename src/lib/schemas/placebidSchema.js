const schema = {
  properties: {
    body: {
      type: 'object',
      properties: {
        amount: {
          type: 'number',
        },
      },
      required: ['amount'],
    },
  },
  required: ['queryStringParameters'],
};

export default schema;
