declare enum Environment {
    Development = "development",
    Production = "production",
    Local = "local",
    Test = "test"
}
declare class EnvironmentVariables {
    NODE_ENV: Environment;
    DATABASE_URI: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
