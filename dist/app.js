"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class appListener {
    constructor(ops = {
        port: null
    }) {
        this.port = ops.port;
        this.app = require('express');
        this.chalk = require('chalk');
    }
    listen(num) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!num || Number)
                throw new ReferenceError('You need to provide a number.');
            this.app.get('/', (req, res) => {
                res.send('Ping.');
            });
            this.app.listen(num, () => {
                console.log(this.chalk.green(`Now listening to port ${num}`));
            });
        });
    }
}
exports.default = appListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BQXFCLFdBQVc7SUFjNUIsWUFBWSxNQUFNO1FBQ2QsSUFBSSxFQUFFLElBQVc7S0FDcEI7UUFJRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7UUFJcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFJN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNLLE1BQU0sQ0FBQyxHQUFZOztZQUNyQixJQUFHLENBQUMsR0FBRyxJQUFJLE1BQU07Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1lBQzVFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRTtnQkFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNyQixDQUFDLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNqRSxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBdkNELDhCQXVDQyJ9