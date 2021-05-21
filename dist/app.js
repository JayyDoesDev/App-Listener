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
exports.appListener = void 0;
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
            if (!num)
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
exports.appListener = appListener;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLFdBQVc7SUFjYixZQUFZLE1BQU07UUFDZCxJQUFJLEVBQUUsSUFBVztLQUNwQjtRQUlHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtRQUlwQixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUk3QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0ssTUFBTSxDQUFDLEdBQVk7O1lBQ3JCLElBQUcsQ0FBQyxHQUFHO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQTtZQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUU7Z0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDckIsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDakUsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQUVRLGtDQUFXO0FBRm5CLENBQUMifQ==
