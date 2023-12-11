import { ConfigService } from "@nestjs/config";
import { Params } from "nestjs-pino";

const ADDITIONAL_LOG_PROPERTIES = {
    "someKey": "someValue",
    "isAwesome": true,
    "canUpscale": 1
};;

export const LoggerConfiguration = (configService: ConfigService): Params => {
    const logLevel = configService.get("LOG_LEVEL")
    const serviceName = configService.get("SERVICE_NAME") ?? ""

    return {
        pinoHttp: {
            level: logLevel,
            mixin: () => ({ ...ADDITIONAL_LOG_PROPERTIES, serviceName })
        }
    }
};