"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const logger_module_1 = require("./infrastructure/logger/logger.module");
const exceptions_module_1 = require("./infrastructure/exceptions/exceptions.module");
const usecases_proxy_module_1 = require("./infrastructure/usecases-proxy/usecases-proxy.module");
const controllers_module_1 = require("./infrastructure/controllers/controllers.module");
const environment_config_module_1 = require("./infrastructure/config/environment-config/environment-config.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [environment_config_module_1.EnvironmentConfigModule, logger_module_1.LoggerModule, exceptions_module_1.ExceptionsModule, usecases_proxy_module_1.UsecasesProxyModule.register(), controllers_module_1.ControllersModule],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map