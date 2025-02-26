type TroppenConfig = {
              [key: string]: any;
};

const Function = (config: TroppenConfig) => {
              const get = (key: string) => config[key];
              const set = (key: string, value: any) => {
                            config[key] = value;
                            return config;
              };
              return {
                            config,
                            get,
                            set
              };
}