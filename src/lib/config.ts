/**
 * Load the enviroment variable named `varName` from the .env file, or throws an error if not found.
 * This avoids using a `undefined` when variable is not in file. Hence, if missing variable, the code
 * won't even load and start, avoiding crashing at runtime because of `undefined` used instead of string.
 * 
 * @param {string} varName The name of the variable inside the enviroment variable file.
 * @returns {string} The value of the variable.
 */
const getEnvVariable = (varName: string) => {
  const variable = process.env[varName];
  if (!variable) throw Error(`Missing enviroment variable ${varName}. Check .env file`);

  return variable;
}

/**
 * Enviroment Variables, all the values inside this object are subject to change
 * depending on the .env file
 */
const variables = {
  JWT_SECRET_KEY: getEnvVariable('JWT_SECRET_KEY'),
  DB_USER: getEnvVariable('DB_USER'),
  DB_PASSWORD: getEnvVariable('DB_PASSWORD'),

  devMode: process.env.NODE_ENV === 'development',
  PORT: process.env.PORT || 5000,
};

export { variables };