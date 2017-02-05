'use strict';

var errors = {
  posting_to_general_channel_denied: 'An admin has restricted posting to the #general channel.',
  invalid_channel: 'One or more channels supplied are invalid.',
  not_authed: 'No authentication token provided.',
  invalid_auth: 'Invalid authentication token.',
  account_inactive: 'Authentication token is for a deleted user or team.',
  invalid_arg_name: 'The method was passed an argument whose name falls outside the bounds of common decency.',
  invalid_form_data: 'Data was either missing or syntactically invalid.',
  request_timeout: 'Data was either missing or truncated.'
};

module.exports = errors;
