const generateReducer = options => {
  const { initialState, constants, actionPrefix } = options;

  return (state = initialState, action) => {
    if (!action) return state;

    const { type, payload } = action;

    const actionIdentifier = type.split('/');
    const actionIdentifierName = actionIdentifier[1];

    const actionName = (actionIdentifier.length)
      ? actionIdentifierName
      : type.replace(`${actionPrefix}/`, '')
    ;

    if (constants[actionName]) return { ...state, ...payload };

    return state;
  };
};

export default generateReducer;
