import { Controller, Get } from "@nestjs/common";

@Controller("app")
export class AppController {
  @Get("/hello")
  getRootRouter() {
    return "Hello team";
  }

  @Get("/bye")
  bye() {
    return "Good bye team";
  }
}
