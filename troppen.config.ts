//A troppenconfig.ts file is a configuration for the Troppen.js File.
type TroppenConfig = {
  [key: string]: any;
};

const createConfig = (config: TroppenConfig) => {
  const get = (key: string) => config[key];
  const set = (key: string, value: any) => {
    config[key] = value;
    return config;
  };
  return {
    config,
    get,
    set,
  };
};
