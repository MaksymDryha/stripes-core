export default (server) => {
  server.post('bl-users/login', {
    errorMessage: JSON.stringify(
      { errors: [
        {
          type: 'error',
          code: 'user.blocked',
        },
        {
          type: 'error',
          code: 'third.failed.attempt',
        },
      ] }
    )
  }, 422);
};
