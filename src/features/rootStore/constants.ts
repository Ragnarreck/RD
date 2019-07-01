const constants = ['LOGOUT'];

export default constants.reduce((acc, it) => ({ ...acc, [it]: it }), {} as any);
