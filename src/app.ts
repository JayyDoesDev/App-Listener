export default class appListener {
    /**
     * Port is a number
     */
    private port: number;
    /**
     * App is to require express
     */
    private app;
    /**
     * Chalk will help with logging in the console with color.
     */
    private chalk;
    
    constructor(ops = {
        port: null as any
    }) {
        /**
         * Port is null
         */
        this.port = ops.port
        /**
         * Express
         */
        this.app = require('express')
        /**
         * Chalk
         */
        this.chalk = require('chalk')
    }
    public async listen(num?: number) {
        if(!num || Number) throw new ReferenceError('You need to provide a number.')
        this.app.get('/', (req: any, res: any) => {
            res.send('Ping.')
        })
        this.app.listen(num, () => {
            console.log(this.chalk.green(`Now listening to port ${num}`))
        })
    }
}
